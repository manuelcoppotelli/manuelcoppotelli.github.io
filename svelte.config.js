import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';

const extensions = ['.svelte', '.md'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: extensions,
			rehypePlugins: [rehypeExternalLinks]
		})
	],

	extensions: extensions,

	kit: {
		adapter: adapter(),
	}
};

export default config;
