import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ['/'],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterTime: 5000,
        launchOptions: { args: ['--no-sandbox', '--disable-setuid-sandbox'] },
      },
    }),
  ],
  // Served under /opsmx/ on the VM behind nginx (also works at root in dev)
  base: process.env.BASE_PATH || '/',
})
