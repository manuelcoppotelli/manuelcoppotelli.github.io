<script>
	import Image from '$lib/components/base/image.svelte';
	import Tag from '$lib/components/base/tag.svelte';
	import dateformat from 'dateformat';
	import BlogPostCard from '$lib/components/base/blog-post-card.svelte';
	import ThreeByThreeGrid from '$lib/components/layout/3x3-grid.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import { keywords, siteBaseUrl, title } from '$lib/meta';

	export let data;
</script>

<svelte:head>
	<meta name="keywords" content={data.tags.concat(keywords).join(', ')} />

	<meta name="description" content={data.excerpt} />
	<meta property="og:description" content={data.excerpt} />
	<meta name="twitter:description" content={data.excerpt} />

	<title>{data.title} - {title}</title>
	<meta property="og:title" content="{data.title} - {title}" />
	<meta name="twitter:title" content="{data.title} - {title}" />

	<meta property="og:image" content="{siteBaseUrl}/images/posts/{data.slug}/cover.png" />
	<meta name="twitter:image" content="{siteBaseUrl}/images/posts/{data.slug}/cover.png" />
</svelte:head>

<div class="blog-layout">
	<main>
		<article id="blog-post">
			<div class="header">
				<h1>{data.title}</h1>
				<div class="note">Published on {dateformat(data.date, 'UTC:dd mmmm yyyy')}</div>
				<div class="note">{data.readingTime}</div>
				<div class="tags">
					{#each data.tags as tag}
						<Tag>{tag}</Tag>
					{/each}
				</div>
			</div>
			<div class="cover-image">
				<Image path="posts/{data.slug}" filename="cover" alt="Cover Image" />
			</div>
			<div class="content">
				<slot />
			</div>
		</article>

		{#if data.relatedPosts && data.relatedPosts.length > 0}
			<div class="related-posts container">
				<Section
					title="Related posts"
					description="Have some time? Feel free to read other posts about the same subject."
					align="top"
				>
					<ThreeByThreeGrid>
						{#each data.relatedPosts as rel}
							<BlogPostCard post={rel} />
						{/each}
					</ThreeByThreeGrid>
				</Section>
			</div>
		{/if}
	</main>
</div>

<style lang="scss">
	.blog-layout {
		background-color: var(--post-page-background-color);
		:global(header) {
			background: var(--footer-background);
		}
		:global(footer) {
			--body-background-color: var(--post-page-background-color);
		}
	}

	@import '../../../lib/scss/mixins.scss';

	// #region Layout styles
	#blog-post {
		position: relative;
		padding-top: 40px;
		padding-bottom: 80px;
		padding-right: 15px;
		padding-left: 15px;

		@include for-iphone-se {
			padding-left: 0;
			padding-right: 0;
		}

		@include for-tablet-portrait-up {
			padding-right: 20px;
			padding-left: 20px;
		}

		@include for-tablet-landscape-up {
			padding-right: 30px;
			padding-left: 30px;
		}

		display: grid;
		grid-template-columns:
			1fr
			min(65ch, 100%)
			1fr;
		grid-row-gap: 30px;
		> * {
			grid-column: 2;
		}

		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			gap: 10px;

			.note {
				font-size: 90%;
				color: rgba(var(--text-color-rgb), 0.8);
			}
		}

		.cover-image {
			width: 100%;
			max-height: 400px;
			box-shadow: var(--image-shadow);

			:global(img) {
				object-fit: cover;
			}
		}

		.tags {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
			flex-wrap: wrap;
		}
	}
	// #endregion

	// #region Element styles

	#blog-post {
		.content {
			:global(p) {
				margin: 0.75rem 0;
				line-height: 1.55em;
			}

			:global(h2) {
				margin: 3rem 0 0.5rem;
			}

			:global(h3) {
				font-size: 1.2rem;
				margin: 2rem 0 0.3rem;
			}

			:global(h4) {
				font-size: 1.3rem;
				margin: 2rem 0 0.3rem;
			}

			:global(img) {
				display: block;
				margin-left: auto;
				margin-right: auto;
				margin-top: 2rem;
				margin-bottom: 2rem;

				max-width: 100%;
				height: auto;
				width: auto;

				box-shadow: var(--image-shadow);
			}

			:global(figcaption) {
				font-size: 0.85rem;
				text-align: center;
				margin-bottom: 2rem;
				color: rgba(var(--text-color-rgb), 0.8);
			}

			:global(blockquote) {
				padding: 25px 25px 15px;
				border-radius: 20px;
				font-size: 1.1rem;
				border-left: 4px solid var(--primary-color);
				background: var(--callout-background-color);
			}

			:global(code:not([class^='language-'])) {
				background: var(--inline-code-background-color);
				padding: 5px 10px;
				border-radius: 5px;
				font-family: var(--mono-font);
			}
		}
	}

	// #endregion
</style>
