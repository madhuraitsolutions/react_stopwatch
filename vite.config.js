import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir:"./www/html/react-stopwatch/",
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      output:{
        entryFileNames:"[name].js",
        chunkFileNames:"[name].js",
        assetFileNames:"[name].[ext]"
      }
    }
  },
  base: '/react-stopwatch/',
})
