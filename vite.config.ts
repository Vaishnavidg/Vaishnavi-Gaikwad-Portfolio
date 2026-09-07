import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const port = Number(process.env.PORT) || 3000;

// Served from the custom domain root (see public/CNAME), so the base path
// stays "/" everywhere — dev, preview, and the GitHub Pages CI build alike.
const base = '/';

export default defineConfig({
  base,

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
