import Prism from 'prismjs';
import 'prism-svelte';
import readingTime from 'reading-time';

export type Post = {
	metadata?: any;
	default?: any;
	hidden: boolean;
	tags: string[];
	date: Date;
	html: string;
	slug: string;
	readingTime?: string;
};

export type PostAndSlug = {
	slug: string;
	post: Post;
};

export type PostAndCount = {
	count: number;
	post: Post;
};

export type PostAndTag = {
	tag: any;
	post: Post;
};

const imports: Record<string, Post> = import.meta.glob('./posts/*.md', { eager: true });

const posts: Post[] = [];
for (const path in imports) {
	const post: Post = imports[path];
	if (post) {
		posts.push({
			...post.metadata,
			...post.default.render()
		});
	}
}

const allTagsAndPosts: PostAndTag[] = posts
	.filter((x) => !x.hidden)
	.map((post) =>
		post.tags.map((tag) => {
			return { tag: tag, post: post };
		})
	)
	.flat();

export const categories = groupByTags(allTagsAndPosts);

function groupByTags(array: PostAndTag[]) {
	return array.reduce((acc: any, value) => {
		const property = value['tag'];
		acc[property] = acc[property] || [];
		acc[property].push(value['post']);
		return acc;
	}, {});
}

const filteredPosts = posts
	.filter((post) => !post.hidden)
	.sort((a, b) =>
		new Date(a.date).getTime() > new Date(b.date).getTime()
			? -1
			: new Date(a.date).getTime() < new Date(b.date).getTime()
			? 1
			: 0
	)
	.map((post) => {
		const readingTimeDuration = readingTime(post.html).text;

		let allRelatedPosts: Post[] = [];
		// Get posts with same tags
		for (const tag of post.tags) {
			allRelatedPosts = allRelatedPosts.concat(categories[tag]);
		}

		const relatedPosts: PostAndCount[] = [];
		// Sort by number of similar tags
		for (const relPost of allRelatedPosts) {
			if (relPost.slug === post.slug) {
				continue;
			}
			const rel = relatedPosts.find((x) => x.post.slug === relPost.slug);
			if (rel) {
				rel.count++;
			} else {
				relatedPosts.push({
					post: { ...relPost, readingTime: readingTime(relPost.html).text },
					count: 1
				});
			}
		}

		return {
			...post,
			readingTime: readingTimeDuration,
			relatedPosts: relatedPosts
				.sort((a, b) => b.count - a.count)
				.slice(0, 3)
				.map((x) => x.post)
		};
	});

export default filteredPosts;
