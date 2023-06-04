import reactRefresh from '@vitejs/plugin-react-refresh'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: 9999,
  },
  publicDir: 'public',
  plugins: [tsconfigPaths(), reactRefresh(), visualizer()],
})
