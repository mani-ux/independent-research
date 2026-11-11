import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
export default defineConfig({
  site: 'https://mani-ux.github.io',
  base: '/independent-research',
  trailingSlash: 'always',
  output: 'static',
  integrations: [mdx()],
});
