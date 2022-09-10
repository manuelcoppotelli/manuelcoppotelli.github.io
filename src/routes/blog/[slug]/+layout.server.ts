import posts from '$lib/posts';
import type { LayoutServerLoad } from './$types';

/** @type {import('./$types').} */
export const load: LayoutServerLoad = async ({ params }) => {
	const post = posts.find((x) => x.slug === params.slug);
	return post;
};
