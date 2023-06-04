const theme = require('./tailwind.theme.json')

const content = [
  './src/**/*.html',
  './src/**/*.tsx',
  './src/**/*.ts',
  './src/**/*.js',
  './src/**/*.jsx',
  './src/**/*.css',
  './tailwind-no-purge.txt', // in case you want a list for hardcoded classes
]

module.exports = {
  content,
  mode: 'jit',
  extend: {},
  theme: theme,
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
