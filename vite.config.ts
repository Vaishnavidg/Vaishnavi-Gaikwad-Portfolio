import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const port = Number(process.env.PORT) || 3000;

export default defineConfig({
  base: '/Vaishnavi-Gaikwad-Portfolio/',

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },

  server: {
    port,
    host: true,
  },

  preview: {
    port,
    host: true,
  },
});