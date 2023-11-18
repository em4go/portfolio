import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://em4go.github.io',
	base: 'portfolio',
	integrations: [mdx(), sitemap()],
});
