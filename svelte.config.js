import adapter from '@sveltejs/adapter-static';
import json from '@rollup/plugin-json'
import { mdsvex } from 'mdsvex';

export default {
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md']
		})
	],
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	},
	plugins: [
		json({
			compact: true
		})
	]
};

