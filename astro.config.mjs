// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://max.github.io',
  base: '/efficient-nlp',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
