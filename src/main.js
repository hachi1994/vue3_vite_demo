import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import HelloWorld from './components/HelloWorld.vue'
import TestRoute from './components/TestRoute.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    { path: '/', component: HelloWorld },
    { path: '/testRoute', component: TestRoute }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
