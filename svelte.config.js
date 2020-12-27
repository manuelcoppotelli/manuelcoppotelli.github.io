import preprocess from 'svelte-preprocess'
import image from "svelte-image"

const production = !process.env.ROLLUP_WATCH


export default {
  preprocess: [
    preprocess({
      sourceMap: !production,
      babel: true,
      postcss: true,
    }),
    image(),
  ],
  compilerOptions: {
    // enable run-time checks when not in production
    dev: !production,
  },
}
