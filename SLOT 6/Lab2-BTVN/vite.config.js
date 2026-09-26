import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Tránh EBUSY trên Windows khi file ảnh đang bị khóa
      usePolling: true,
      interval: 1000,
    },
  },
})
