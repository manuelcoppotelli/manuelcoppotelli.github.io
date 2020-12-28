const colors = require('tailwindcss/colors')
const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  darkMode: 'media',
  plugins: [],
  purge: {
    content: [
      './src/**/*.svelte',
    ],
    options: {
      defaultExtractor: (content) => [
          ...tailwindExtractor(content),
          ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
      ],
      keyframes: true,
    },
    enabled: production,
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
