import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import TestRoute from './components/TestRoute.vue'
import Home from './components/Home.vue'
import TestProvide from '@components/provide/TestProvide.vue'
import TestMixin from '@components/testMixin/Index.vue'
import TestDirectives from '@components/testDirectives/Index.vue'
import TestRenderFunction from '@components/renderFunction/Index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    { path: '/', component: Home },
    { path: '/testRoute/:id', component: TestRoute, props: true },
    { path: '/testProvide', component: TestProvide },
    { path: '/testMixin', component: TestMixin },
    { path: '/testDirectives', component: TestDirectives },
    { path: '/testRenderFunction', component: TestRenderFunction }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mixin({
    data() {
        return {
            query: 'mm'
        }
    }
})
app.mount('#app')
