import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/alphabet',
    name: 'Alphabet',
    component: () => import("../views/Alphabet.vue") 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
