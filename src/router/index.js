import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/rule2',
    component: Layout,
    children: [
      {
        path: 'drl',
        name: 'rule',
        component: () => import('@/views/rule2/drl'),
        meta: { title: '规则', icon: 'form' }
      }
    ]
  },
  {
    path: '/variables',
    component: Layout,
    children: [
      {
        path: 'index2',
        name: 'variables',
        component: () => import('@/views/variables/index2'),
        meta: { title: '变量', icon: 'form' }
      }
    ]
  },
  {
    path: '/test',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'test',
        component: () => import('@/views/test/index'),
        meta: { title: '测试', icon: 'form' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

