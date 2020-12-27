<script>
  export let alt = ""
  export let width = null
  export let height = null
  export let src = ""
  export let srcset = ""
  export let srcsetWebp = ""
  export let sizes = "(max-width: 1000px) 100vw, 1000px"
  export let wrapperClass = null

  let className = ""
  export { className as class }
</script>


<picture class={wrapperClass}>
  <source type="image/webp" srcset="{srcsetWebp}" {sizes} />
  <source {srcset} {sizes} />
  <img
    {src}
    class="{className}"
    {alt}
    {width}
    {height}
  />
</picture>
