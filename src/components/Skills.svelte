<script>
  import Skill from './Skill.svelte'

  export let set = []
</script>


<div class="py-8 text-base leading-6 space-y-4 text-gray-700 dark:text-gray-200 sm:text-lg sm:leading-7">
  
  <ul class="list-disc space-y-2">

    {#each set as skill}

    <Skill>
      { skill }
    </Skill>

    {/each}

  </ul>


  <div class="flex items-center justify-center">

    <button 
      class="w-1/3 bg-light-blue-500 h-12 text-white font-semibold px-6 py-2 rounded-lg"
      type="submit"
    >
      <a href="/resumee">
        Resumee
      </a>
    </button>

  </div>

</div>
