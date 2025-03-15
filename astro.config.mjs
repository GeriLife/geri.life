// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});