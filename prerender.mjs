// prerender.mjs — multi-route prerender (self-verifying, Helmet-aware)
// Renders EACH route to dist/<route>/index.html so every page ships its OWN HTML +
// its OWN <title> (set by react-helmet-async) in view-source. Logs each page's
// title + h1, and FAILS the build if any non-home route rendered homepage content.
//
// Pair with nginx:  try_files $uri $uri/index.html /opsmx/index.html;

import express from 'express'
import puppeteer from 'puppeteer'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputDir = process.env.OUT_DIR || 'dist'
const distDir = join(__dirname, outputDir)
const basePath = process.env.BASE_PATH || '/'

const ROUTES = [
  '/', '/platform', '/solutions', '/videos', '/case-studies', '/company', '/contact',
  '/pricing', '/request-a-demo', '/x-bom', '/secrets', '/static-application-security-testing', '/ai-security',
  '/api-security', '/git-security-posture', '/ai-penetration-testing', '/penetration-testing',
  '/ai-bom', '/solution-briefs/advanced-bom-reporting', '/solution-briefs/why-opsmx-xbom',
  '/solution-briefs/regulatory-bom-reporting-suite', '/dependency-intelligence', '/license-risk',
  '/provenance', '/audit-reporting', '/cluster-security', '/workload-security',
  '/threat-correlation', '/cloud-remediation', '/change-risk', '/deployment-verification',
  '/root-cause-analysis', '/incident-diagnostics', '/operational-remediation',
  '/open-security-intelligence', '/remediation-benchmarks',
]

// RAW built shell (empty <div id="root">). Fresh `vite build` runs before this, so root
// is empty here — which lets us reliably wait for each route to actually render.
const shell = readFileSync(join(distDir, 'index.html'), 'utf8')
// The template default <title> — used to detect pages whose Helmet title hasn't set yet.
const templateTitle = (shell.match(/<title>([^<]*)<\/title>/i) || [, ''])[1].trim()

const app = express()
app.use(basePath, express.static(distDir, { index: false }))
app.use((_req, res) => res.send(shell))
const server = app.listen(0)
const port = server.address().port
const base = basePath.endsWith('/') ? basePath : basePath + '/'

const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
const page = await browser.newPage()

let homeH1 = null
let ok = 0, warned = 0
for (const route of ROUTES) {
  const url = `http://localhost:${port}${base}${route === '/' ? '' : route.replace(/^\//, '')}`
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })

  // 1) wait for real rendered text in #root
  await page.waitForFunction(
    () => { const r = document.getElementById('root'); return r && r.innerText.trim().length > 20 },
    { timeout: 30000 }
  ).catch(() => {})

  // 2) give react-helmet-async a beat to write <title> into the head.
  //    For the 19 pages with a <Seo>, wait until the title differs from the template
  //    default; homepage/others keep the template title, so just fall through after 1.5s.
  await page.waitForFunction(
    (tpl) => document.title && document.title.trim() !== tpl,
    { timeout: 2500 }, templateTitle
  ).catch(() => {})
  await new Promise(r => setTimeout(r, 800))

  const html = await page.content()
  const title = (html.match(/<title>([^<]*)<\/title>/i) || [, ''])[1].trim()
  const h1 = await page.$eval('h1', el => el.innerText.trim()).catch(() => '(no h1)')
  if (route === '/') homeH1 = h1

  const outPath = route === '/' ? join(distDir, 'index.html') : join(distDir, route, 'index.html')
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)

  const dupe = route !== '/' && homeH1 && h1 === homeH1
  if (dupe) { console.warn(`[prerender] ⚠ DUPLICATE (homepage clone): ${route}  h1="${h1}"`); warned++ }
  else { console.log(`[prerender] ✓ ${route}\n           title="${title}"\n           h1="${h1}"`); ok++ }
}

await browser.close()
server.close()
console.log(`[prerender] done — ${ok} ok, ${warned} duplicate, ${ROUTES.length} total`)
if (warned > 0) { console.error(`[prerender] FAIL: ${warned} route(s) rendered homepage content`); process.exit(1) }
if (ok === 0) { console.error('[prerender] FATAL: nothing rendered'); process.exit(1) }
