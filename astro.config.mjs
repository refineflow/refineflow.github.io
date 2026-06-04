// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://flowfine.github.io',
  base: '/my-web-site',
  vite: {
    plugins: [tailwindcss()]
  }
});
