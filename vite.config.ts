import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const port = Number(process.env.PORT) || 3000;

// GitHub Pages serves this project site from https://<user>.github.io/<repo>/,
// so the CI build needs the repo name as the base path. Local dev/preview stays at /.
const base = process.env.GITHUB_ACTIONS ? '/Vaishnavi-Gaikwad-Portfolio/' : '/';

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
