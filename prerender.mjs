import express from 'express'
import puppeteer from 'puppeteer'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync, writeFileSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, 'dist')
const basePath = process.env.BASE_PATH || '/'   // e.g. /app/

// Serve the built files exactly as nginx would, under the base path
const app = express()
app.use(basePath, express.static(distDir))
const server = app.listen(0)
const port = server.address().port
const url = `http://localhost:${port}${basePath}`

console.log('[prerender] loading', url)
const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})
const page = await browser.newPage()
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
await new Promise(r => setTimeout(r, 5000))   // let animations settle

const html = await page.content()
await browser.close()
server.close()

writeFileSync(join(distDir, 'index.html'), html)
const hit = (html.match(/Active Defense/g) || []).length
console.log(`[prerender] wrote dist/index.html — "Active Defense" found ${hit} time(s)`)
if (hit === 0) { console.error('[prerender] WARNING: content not found'); process.exit(1) }
