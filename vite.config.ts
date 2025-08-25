import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Base path for production
  base: '/',

  optimizeDeps: {
    exclude: ['lucide-react'],
  },

  build: {
    // Increase chunk size warning limit if needed
    chunkSizeWarningLimit: 1000, // KB

    rollupOptions: {
      output: {
        // Manual chunking to split vendor libraries
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
