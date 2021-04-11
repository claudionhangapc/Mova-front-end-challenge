import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Region from '../views/Region.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/region/:id',
    name: 'region',
    component: Region,
    props:true
  },
  {
    path:"*",
    redirect:"/",
    component:Home
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
