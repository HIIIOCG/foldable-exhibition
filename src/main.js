import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style/index.scss'
// Router
import InteractPage from './pages/InteractPage.vue'
import DisplayPage from './pages/DisplayPage.vue'

console.log(createRouter)

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: InteractPage },
        { path: '/interact', component: InteractPage },
        { path: '/display', component: DisplayPage },
    ]
})

createApp(App).use(router).mount('#app')
