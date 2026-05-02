import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://daoquynh.github.io',
  integrations: [tailwind({ applyBaseStyles: false })],
  output: 'static',
});
