import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  
  return {
    plugins: [react()],
    
    // Base public path - penting untuk React Router
    base: '/',
    
    // Konfigurasi build untuk produksi
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      minify: isProd,
      sourcemap: !isProd,
      
      // Pengaturan untuk caching yang lebih baik
      rollupOptions: {
        output: {
          // Format nama file untuk manajemen cache yang lebih baik
          entryFileNames: isProd ? 'assets/[name].[hash].js' : 'assets/[name].js',
          chunkFileNames: isProd ? 'assets/[name].[hash].js' : 'assets/[name].js',
          assetFileNames: isProd ? 'assets/[name].[hash].[ext]' : 'assets/[name].[ext]',
          
          // Memisahkan vendor dependencies ke chunk terpisah
          manualChunks: id => {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        }
      }
    },
    
    // Konfigurasi server development
    server: {
      host: '0.0.0.0',      // Mengizinkan koneksi eksternal
      port: 5173,           // Port default Vite
      strictPort: false,    // Allow fallback if port is in use
      cors: true            // Enable CORS for development
    },
    
    // Konfigurasi preview (untuk npm run preview)
    preview: {
      port: 4173,
      host: '0.0.0.0'
    },
    
    // Path aliases untuk import yang lebih rapi
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@components': resolve(__dirname, 'src/components'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@styles': resolve(__dirname, 'src/styles')
      }
    },
    
    // Opsi optimasi dependency
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom']
    }
  }
})