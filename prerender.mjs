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
  '/',
  '/platform',
  '/solutions',
  '/videos',
  '/case-studies',
  '/company',
  '/contact',
  '/pricing',
  '/request-a-demo',
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
  '/open-security-intelligence',
  '/remediation-benchmarks',
]

// Read Vite build output
const shell = readFileSync(
  join(distDir, 'index.html'),
  'utf8'
)

// Default template title
const templateTitle =
  (shell.match(/<title>([^<]*)<\/title>/i) || [, ''])[1].trim()

// Express server
const app = express()

app.use(
  basePath,
  express.static(distDir, {
    index: false,
  })
)

app.use((_req, res) => {
  res.send(shell)
})

const server = app.listen(0)
const port = server.address().port

const base =
  basePath === '/'
    ? ''
    : basePath.replace(/\/$/, '')

// Start Puppeteer
const browser = await puppeteer.launch({
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
  ],
})

const page = await browser.newPage()

let homeText = null
let ok = 0
let warned = 0

for (const route of ROUTES) {

  const url =
    `http://localhost:${port}${base}${route}`

  console.log(
    `[prerender] rendering ${route} -> ${url}`
  )

  await page.goto(url, {
    waitUntil: 'networkidle0',
    timeout: 60000,
  })

  // Wait for React to render
  await page.waitForFunction(
    () => {
      const root =
        document.getElementById('root')

      return (
        root &&
        root.innerText.trim().length > 20
      )
    },
    {
      timeout: 30000,
    }
  ).catch(() => {})

  // Wait for React Helmet title
  await page.waitForFunction(
    tpl =>
      document.title &&
      document.title.trim() !== tpl,
    {
      timeout: 2500,
    },
    templateTitle
  ).catch(() => {})

  // Give Helmet a moment to update
  await new Promise(resolve =>
    setTimeout(resolve, 800)
  )

  const html = await page.content()

  const title =
    (
      html.match(/<title>([^<]*)<\/title>/i)
      || [, '']
    )[1].trim()

  const h1 =
    await page.$eval(
      'h1',
      el => el.innerText.trim()
    ).catch(() => '(no h1)')

  const bodyText =
    await page.evaluate(() => {
      const root =
        document.getElementById('root')

      return root
        ? root.innerText.trim()
        : ''
    })

  // Save homepage content for comparison
  if (route === '/') {
    homeText = bodyText
  }

  // Detect pages rendering exactly the homepage
  const dupe =
    route !== '/' &&
    homeText &&
    bodyText === homeText

  // Output path
  const outPath =
    route === '/'
      ? join(distDir, 'index.html')
      : join(
          distDir,
          route,
          'index.html'
        )

  mkdirSync(
    dirname(outPath),
    {
      recursive: true,
    }
  )

  writeFileSync(
    outPath,
    html
  )

  if (dupe) {

    console.warn(
      `[prerender] ⚠ DUPLICATE (homepage clone): ${route}`
    )

    console.warn(
      `           title="${title}"`
    )

    console.warn(
      `           h1="${h1}"`
    )

    warned++

  } else {

    console.log(
      `[prerender] ✓ ${route}`
    )

    console.log(
      `           title="${title}"`
    )

    console.log(
      `           h1="${h1}"`
    )

    ok++
  }
}

// Cleanup
await browser.close()
server.close()

console.log(
  `[prerender] done — ${ok} ok, ${warned} duplicate, ${ROUTES.length} total`
)

if (warned > 0) {
  console.error(
    `[prerender] FAIL: ${warned} route(s) rendered homepage content`
  )

  process.exit(1)
}

if (ok === 0) {
  console.error(
    '[prerender] FATAL: nothing rendered'
  )

  process.exit(1)
}
