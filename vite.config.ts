import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/infinix-events/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});