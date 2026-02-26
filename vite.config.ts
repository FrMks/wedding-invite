import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // Установите: npm i -D @tailwindcss/vite

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
