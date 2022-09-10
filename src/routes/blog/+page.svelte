<script>
	import BlogGrid from '$lib/components/layout/3-2-1-grid.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import BlogPostCard from '$lib/components/base/blog-post-card.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section id="blog">
	<Section align="top" title="All posts">
		<div class="container">
			<BlogGrid>
				{#each data.posts as post}
					<BlogPostCard {post} />
				{/each}
			</BlogGrid>
		</div>
	</Section>
</section>
