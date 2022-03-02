import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'
import Errmsg from '../views/errmsg.vue'
import Signin from '../views/signin.vue'
import Imessage from '../views/imessage.vue'
// public用户的页面
import Signup from '../views/public/signup.vue'
import Orders from '../views/public/orders.vue'
import Grap from '../views/public/grap.vue'
import Pay from '../views/public/pay.vue'

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
    path: '/errmsg',
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
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/grap',
    name: 'Grap',
    component: Grap
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
