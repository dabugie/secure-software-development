import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
const SERVER_PORT = 4200;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = `http://localhost:${SERVER_PORT}`;
const SCRIPT = process.env.npm_lifecycle_script || '';
const isBuild = SCRIPT.includes('astro build');
let BASE_URL = LOCALHOST_URL;
if (isBuild) {
	BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
	server: {
		port: SERVER_PORT,
	},
	site: BASE_URL,
	output: 'server',
	integrations: [
		sitemap(),
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		react(),
	],
	adapter: netlify({
		edgeMiddleware: true,
	}),
});
