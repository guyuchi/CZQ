// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [mdx()],

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
      strategy: 'prefix',
    },
  },

  site: 'https://your-site.vercel.app',
  adapter: cloudflare(),
});