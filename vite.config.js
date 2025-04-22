import { defineConfig } from 'vite';

export default defineConfig({
  base: '/cryptodream-web/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});
