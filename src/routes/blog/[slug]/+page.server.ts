import type { PageServerLoad } from './$types';
import type { PostAndSlug, Post } from '$lib/posts';

// Get posts info
const allPosts: Record<string, Post> = import.meta.glob(`../../../lib/posts/*.md`, { eager: true });

const posts: PostAndSlug[] = [];
// Get the posts' slugs
for (const path in allPosts) {
	const post = allPosts[path];
	const slug = post.metadata.slug;
	const p = { post, slug };
	posts.push(p);
}

export const load: PageServerLoad = async ({ params }) => {
	// Find the post with the slug
	const filteredPost = posts.find((p) => {
		return p.slug.toLowerCase() === params.slug.toLowerCase();
	});

	return filteredPost?.post.default.html;
};
