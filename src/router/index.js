import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'
import Errmsg from '../views/errmsg.vue'
import Signin from '../views/signin.vue'
import Imessage from '../views/imessage.vue'
// public用户的页面

import Orders from '../views/public/orders.vue'
import Grap from '../views/public/grap.vue'
import Pay from '../views/public/pay.vue'

// admin用户页面
import Activities from '../views/admin/activities'
import Manage from '../views/admin/manage'
import Details from '../views/admin/details'
import Launch from '../views/admin/launch'

//root用户界面
import Promote from '../views/root/promote'
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
    component: Home,
    // children: [
    //   {
    //     path: 'grap',
    //     name: 'Grap',
    //     component: Grap
    //   },
    // ]
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
    path: '/pay',
    name: 'Pay',
    component: Pay
  },
  {
    path: '/grap',
    name: 'Grap',
    component: Grap
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage
  },
  {
    path: '/launch',
    name: 'Launch',
    component: Launch
  },
  {
    path: '/Details',
    name: 'details',
    component: Details
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities
  },
  {
    path: '/promote',
    name: 'Promote',
    component: Promote
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // moudle
})

export default router
