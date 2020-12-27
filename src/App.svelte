<script>
  export let name
</script>


<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>


<main class="text-center p-16 max-w-xs sm:max-w-none mx-auto my-0">
  <h1 class="text-red-500 uppercase text-4xl font-bold">Hello {name}!</h1>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
