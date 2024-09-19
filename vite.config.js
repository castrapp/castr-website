import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,  // Automatically open the browser on dev server start
    hmr: {
      overlay: false,  // Disable HMR overlay for CSS
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Serve CSS files without bundling or renaming
        assetFileNames: '[name].[ext]',
      },
    },
    sourcemap: true,  
  },
  css: {
    devSourcemap: true,
  },
  
  // css: {
  //   // Disable all CSS preprocessing and PostCSS handling
  //   preprocessorOptions: {},
  //   postcss: false,
  // },
})
