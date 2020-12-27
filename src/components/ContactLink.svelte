<script>
  export let to = '#'
  export let tooltip = false
  
  let show = false

  import SvelteTooltip from 'svelte-tooltip'

  import { gray } from 'tailwindcss/colors'

</script>


<span class="text-white">
  
  <SvelteTooltip 
    tip="{tooltip}"
    bottom active={show}
    on:mouseenter={ () => show=true } 
    on:mouseleave={ () => show=false }
    color="{ gray[700] }"
  >
    
    <a href="{to}" >
      
      <span class="text-gray-700 hover:text-light-blue-600">
        <slot />
      </span>
      
    </a>
    
  </SvelteTooltip>

</span>
