import Vue from 'vue'
import VueRouter from 'vue-router'
import Cube from '../views/Cube.vue'
import Earth from '../views/Earth.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cube',
    name: 'Cube',
    component: Cube
  },
  {
    path: '/earth',
    name: 'Earth',
    component: Earth
  },
  {
    path: '/cylinder',
    name: 'Cylinder',
    component: () => import('../views/Cylinder.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
