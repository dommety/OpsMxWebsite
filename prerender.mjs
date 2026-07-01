// prerender.mjs — multi-route prerender
// Renders EACH route to its own dist/<route>/index.html so every page ships real
// HTML in view-source (not the homepage shell). Fixes the duplicate-content bug where
// all routes served the single prerendered homepage.
//
// Pair with nginx:  try_files $uri $uri/index.html /opsmx/index.html;
// (so /opsmx/secrets -> dist/secrets/index.html, unknown -> homepage fallback)

import express from 'express'
import puppeteer from 'puppeteer'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, 'dist')
const basePath = process.env.BASE_PATH || '/'   // e.g. /opsmx/

// ---- Every route in App.jsx (keep in sync when routes are added/removed) ----
const ROUTES = [
  '/',
  '/platform',
  '/solutions',
  '/videos',
  '/case-studies',
  '/company',
  '/contact',
  '/pricing',
  '/x-bom',
  '/secrets',
  '/static-application-security-testing',
  '/ai-security',
  '/api-security',
  '/git-security-posture',
  '/ai-penetration-testing',
  '/penetration-testing',
  '/ai-bom',
  '/solution-briefs/advanced-bom-reporting',
  '/solution-briefs/why-opsmx-xbom',
  '/solution-briefs/regulatory-bom-reporting-suite',
  '/dependency-intelligence',
  '/license-risk',
  '/provenance',
  '/audit-reporting',
  '/cluster-security',
  '/workload-security',
  '/threat-correlation',
  '/cloud-remediation',
  '/change-risk',
  '/deployment-verification',
  '/root-cause-analysis',
  '/incident-diagnostics',
  '/operational-remediation',
]

// Keep the ORIGINAL built shell in memory so the dev server can serve it as the SPA
// fallback for routes whose folder doesn't exist yet (we're about to create them).
const shell = readFileSync(join(distDir, 'index.html'), 'utf8')

const app = express()
app.use(basePath, express.static(distDir, { index: false }))  // real files (assets, etc.)
app.use((_req, res) => res.send(shell))                       // SPA fallback -> shell
const server = app.listen(0)
const port = server.address().port

const base = basePath.endsWith('/') ? basePath : basePath + '/'
const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
const page = await browser.newPage()

let ok = 0, warned = 0
for (const route of ROUTES) {
  const url = `http://localhost:${port}${base}${route === '/' ? '' : route.replace(/^\//, '')}`
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
  // wait until React has painted content into #root, then a short settle for animations
  await page.waitForFunction(
    () => { const r = document.getElementById('root'); return r && r.children.length > 0 },
    { timeout: 30000 }
  ).catch(() => {})
  await new Promise(r => setTimeout(r, 1200))

  const html = await page.content()
  const empty = /<div id="root">\s*<\/div>/.test(html)

  const outPath = route === '/'
    ? join(distDir, 'index.html')
    : join(distDir, route, 'index.html')
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)

  if (empty) { console.warn(`[prerender] ⚠ EMPTY root: ${route}`); warned++ }
  else { console.log(`[prerender] ✓ ${route}  (${html.length} bytes)`); ok++ }
}

await browser.close()
server.close()

console.log(`[prerender] done — ${ok} ok, ${warned} empty, ${ROUTES.length} total`)
if (ok === 0) { console.error('[prerender] FATAL: nothing rendered'); process.exit(1) }
