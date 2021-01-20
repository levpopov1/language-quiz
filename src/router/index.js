import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Alphabet from '../views/Alphabet.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/alphabet',
    name: 'Alphabet',
    component: Alphabet
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
