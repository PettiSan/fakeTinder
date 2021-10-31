import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import tsconfig from './tsconfig.json'

const paths = tsconfig.compilerOptions.paths

const alias = Object.keys(paths).reduce(
  (acc, key) => {
    acc['/' + key.replace('/*', '')] = path.resolve(
      __dirname + '/src/' + paths[key][0].replace('/*', '')
    )
    return acc
  },
  {
    // '@material-ui/icons': '@material-ui/icons/esm', // example of hardcoded alias
  }
)

export default defineConfig({
  server: {
    port: 3001,
  },
  resolve: {
    alias: alias,
  },
  publicDir: 'public',
  plugins: [tsconfigPaths(), reactRefresh(), visualizer()],
})
