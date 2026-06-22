import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Served under /opsmx/ on the VM behind nginx (also works at root in dev)
  base: process.env.BASE_PATH || '/',
})
