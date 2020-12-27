<script>
  export let to = '#'
  export let tooltip = false
  
  let show = false

  let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  import SvelteTooltip from 'svelte-tooltip'

  import { gray } from 'tailwindcss/colors'

</script>


<span class="text-white dark:text-gray-800">
  
  <SvelteTooltip 
    tip="{tooltip}"
    bottom active={show}
    on:mouseenter={ () => show=true } 
    on:mouseleave={ () => show=false }
    color="{ darkMode ? gray[100] : gray[700] }"
  >
    
    <a href="{to}" >
      
      <span class="text-gray-700 dark:text-gray-200 hover:text-light-blue-600">
        <slot />
      </span>
      
    </a>
    
  </SvelteTooltip>

</span>
