<script>
	import Hero from '$lib/components/home/hero.svelte';
	import About from '$lib/components/home/about.svelte';
	import RecentPosts from '$lib/components/home/recent-posts.svelte';
	import Experience from '$lib/components/home/experience.svelte';
	import Projects from '$lib/components/home/projects.svelte';

	export let data;
</script>

<div class="container">
	<Hero />
	<About />
	<RecentPosts posts={data.posts} />
	<Projects />
	<Experience />
</div>
