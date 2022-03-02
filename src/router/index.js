import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Errmsg from '../views/errmsg.vue'
import Signin from '../views/signin.vue'
import Imessage from '../views/imessage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: { name: 'Home' }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/error',
    name: 'Errmsg',
    component: Errmsg
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/imessage',
    name: 'Imessage',
    component: Imessage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
