<script>
  export let name = ''
  export let role = ''
  export let place = ''

  import briefcase from 'heroicons/solid/briefcase.svg'  
  import locationMarker from 'heroicons/solid/location-marker.svg'

  import Icon from './Icon.svelte'
</script>


<div class="py-8 text-base leading-6 space-y-1 text-gray-700 dark:text-gray-200 sm:text-lg sm:leading-7">

  <div class="flex items-start justify-center">
    <p class="ml-2 font-bold text-3xl">{ name }</p>
  </div>


  <div class="flex items-start justify-center">

    <Icon>
      {@html briefcase }
    </Icon>

    <p class="ml-2 font-bold">{ role }</p>
  
  </div>


  <div class="flex items-start justify-center">
    
    <Icon>
      {@html locationMarker }
    </Icon>
    
    <p class="ml-2">{ place }</p>

  </div>

</div>
