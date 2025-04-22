import { defineConfig } from 'vite';

export default defineConfig({
  base: '/cli-chat/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});
