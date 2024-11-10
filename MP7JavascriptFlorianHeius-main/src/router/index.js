import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Calculator from '../views/Calculadora.vue'
import Comments from '../views/ComentariFetch.vue'
import Users from '../views/AxiosUsers.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/calculator', name: 'Calculator', component: Calculator },
    { path: '/comments', name: 'Comments', component: Comments },
    { path: '/users', name: 'Users', component: Users },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


