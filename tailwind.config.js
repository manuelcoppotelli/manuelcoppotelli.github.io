const colors = require('tailwindcss/colors')

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  darkMode: 'media',
  plugins: [],
  purge: {
    content: [
      './src/**/*.svelte',
    ], 
    enabled: production
  },
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        'light-blue': colors.lightBlue,
      },
    },
  },
  variants: {},
}
