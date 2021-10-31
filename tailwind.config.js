const theme = require('./tailwind.theme.json')

const purge = [
  './src/**/*.html',
  './src/**/*.tsx',
  './src/**/*.ts',
  './src/**/*.js',
  './src/**/*.jsx',
  './src/**/*.css',
  './tailwind-no-purge.txt', // in case you want a list for hardcoded classes
]

module.exports = {
  mode: 'jit',
  purge: purge,
  darkMode: false,
  extend: {},
  theme: theme,
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
