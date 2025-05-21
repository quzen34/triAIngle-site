import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // SADECE SLASH! BAŞKA ŞEY YOK!
  plugins: [react()],
})
