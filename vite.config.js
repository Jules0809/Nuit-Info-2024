import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', // Assure-toi que cette ligne est présente
    }
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
    host: '0.0.0.0',
    port: 5174,
  },
});
