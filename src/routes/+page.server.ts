import posts from '$lib/posts';
import type { PageServerLoad } from './$types';

const limit = 4;

export const load: PageServerLoad = async () => {
	const body = Object.keys(posts)
		.slice(0, limit)
		.map((slug) => ({
			slug,
			...posts[slug]
		}));

	return { posts: body };
};
