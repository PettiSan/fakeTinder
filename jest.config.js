const mapper = require('jest-module-name-mapper').default()

mapper['\\.(css|less)$'] = '<rootDir>/node_modules/jest-css-modules'

module.exports = {
  setupFiles: ['./setupTests.js'],
  testEnvironment: 'node',
  moduleNameMapper: mapper, // fix paths, ex: @components -> src/
}
