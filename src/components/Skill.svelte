<script>
  import Icon from './Icon.svelte'

  import CheckCircle from 'heroicons/solid/check-circle.svg'
</script>


<li class="flex items-start">

  <Icon>
    {@html CheckCircle }
  </Icon>

  <p class="ml-2">
    <slot />
  </p>

</li>
