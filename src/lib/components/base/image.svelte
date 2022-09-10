<script>
	export let alt;
	export let path = null;
	export let filename;
	export let figcaption = null;

	let imageSrc;

	$: imageSrc = `/images/${path ? path + '/' : ''}${filename}`;
</script>

<figure>
	<picture>
		<source srcset="{imageSrc}.avif" type="image/avif" />
		<source srcset="{imageSrc}.webp" type="image/webp" />
		<img src="{imageSrc}.png" {alt} loading="lazy" decoding="async" />
	</picture>

	{#if figcaption}
		<figcaption>{@html figcaption}</figcaption>
	{/if}
</figure>

<style lang="scss">
	picture {
		position: relative;
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
		}
	}
</style>
