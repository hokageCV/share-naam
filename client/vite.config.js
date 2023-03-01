import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig({
  esbuild: {
    loader: "jsx",
  },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     loader: {
  //       ".js": "jsx",
  //       ".ts": "tsx",
  //     },
  //   },
  // },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
})