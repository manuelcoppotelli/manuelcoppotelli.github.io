import posts from '$lib/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const body = Object.keys(posts).map((slug) => ({
		slug,
		...posts[slug]
	}));

	return { posts: body };
};
