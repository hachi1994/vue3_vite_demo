import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: resolve('src') },{find:'@components',replacement:resolve('src','components')}]
  },
  server: {
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://119.3.103.139:8002/',
        changeOrigin: true
      }
    }
  }
})
