import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    port:8090,
    proxy:{
      '/api':{
        target:'http://119.3.103.139:8002/',
        changeOrigin:true
      }
    }
  }
})
