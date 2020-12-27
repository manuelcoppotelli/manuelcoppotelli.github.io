<script>
  export let to = '#'
  export let tooltip = false
  
  let show = false

  import SvelteTooltip from 'svelte-tooltip'
</script>


<span class="text-white">
  
  <SvelteTooltip 
    tip="{tooltip}"
    bottom active={show}
    on:mouseenter={ () => show=true } 
    on:mouseleave={ () => show=false }
    color="rgb(55, 65, 81)"
  >
    
    <a href="{to}" >
      
      <span class="text-gray-700 hover:text-light-blue-600">
        <slot />
      </span>
      
    </a>
    
  </SvelteTooltip>

</span>
