import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Memastikan base URL benar
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Gunakan nama file yang lebih sederhana jika diperlukan
    rollupOptions: {
      output: {
        // Mengurangi hash pada nama file
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      }
    }
  }
})