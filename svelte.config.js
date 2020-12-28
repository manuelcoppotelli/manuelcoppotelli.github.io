const image = require('svelte-image')
const sveltePreprocess = require('svelte-preprocess')

const production = !process.env.ROLLUP_WATCH

module.exports = {
  preprocess: [
    sveltePreprocess({
      defaults: {
        style: 'postcss',
        script: 'babel',
      },
      sourceMap: production,
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
