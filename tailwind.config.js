const colors = require('tailwindcss/colors')

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    content: [
      './src/**/*.svelte',
    ], 
    enabled: production
  },
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [],
}
