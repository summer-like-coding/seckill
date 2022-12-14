import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
// 一些公共页面

const Home = () => import('../views/home.vue')
const Errmsg = () => import('../views/errmsg.vue')
const Signin = () => import('../views/signin.vue')
const Signup = () => import('../views/signup.vue')
const Imessage = () => import('../views/imessage.vue')
// public用户的页面

const Orders = () => import('../views/public/orders.vue')
const Grap = () => import('../views/public/grap.vue')

// admin用户页面
const Activities = () => import('../views/admin/activities')
const Manage = () => import('../views/admin/manage')
const Details = () => import('../views/admin/details')
const Rules = () => import("../views/admin/rules")
const Variables = () => import('../views/admin/variables.vue')
const Launch = () => import('../views/admin/launch.vue')

//root用户界面
// import Promote from '../views/root/promote'
const Promote = () => import('../views/root/promote')

import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: '主页' }
  },
  {
    path: '/404',
    name: 'Errmsg',
    component: Errmsg,
    meta: { title: '错误页面' }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    meta: { title: '登录' }

  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { title: '注册' }

  },
  {
    path: '/imessage',
    name: 'Imessage',
    component: Imessage,
    meta: { title: '我的信息', isAuth: true }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: { title: '订单详情', isAuth: true }

  },
  {
    path: '/grap',
    name: 'Grap',
    component: Grap,
    meta: { title: '抢购', isAuth: true }

  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage,
    meta: { title: '管理活动', isAuth: true }

  },
  {
    path: '/launch',
    name: 'Launch',
    component: Launch,
    meta: { title: '发起活动', isAuth: true }

  },
  {
    path: '/details',
    name: 'Details',
    component: Details,
    meta: { title: '申请记录', isAuth: true }

  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities,
    meta: { title: '所有活动', isAuth: true }

  },
  {
    path: '/variables',
    name: 'Variables',
    component: Variables,
    meta: { title: '变量', isAuth: true }
  },
  {
    path: '/promote',
    name: 'Promote',
    component: Promote,
    meta: { title: '人员升级', isAuth: true }

  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
    meta: { title: '规则准入', isAuth: true }
  },
  { path: '*', redirect: '/404' },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})


// 全局前置拦截
router.beforeEach(async (to, from, next) => {
  // 如果我已经获取到了token，那么就表示，我已经登录过了，那么就登陆不了
  if (localStorage.getItem("TOKEN")) {
    if (to.path === '/signin' || to.path === '/signup') {
      if (localStorage.getItem('ROLE') === 'user') {
        console.log("我是普通用户");
        next('/home')
      } else if (localStorage.getItem('ROLE') === 'admin') {
        console.log("我是admin用户");
        next('/activities')
      } else if (localStorage.getItem('ROLE') === 'root') {
        console.log("我是root用户");
        next('/promote')
      }
      // next('/home')
    } else {
      // 我不是去注册登录，对于其他页面只要没有用户名的，我都不允许进入
      // 这时候就要判断类型
      // alert('你已经登录或注册过了')
      // 我需要在页面上显示用户名
      if (store.state.user.userInfo.userName) {
        // console.log("我有用户名，直接跳转");
        next()
      } else {
        // console.log("我是否执行");
        let phone = localStorage.getItem("PHONE");
        store.dispatch('user/getUserInfo', phone);
        next()
      }
    }
  }
  // 未获取到token
  else {
    // console.log(to.path);
    if (to.path.indexOf('/imessage') !== -1 || to.path.indexOf('/orders') !== -1 || to.path.indexOf('/grap') !== -1) {
      // 未登录情况，就是在路径里有'/message'，我们就让他登录
      // alert('请登录')
      ElementUI.Message({
        message: '请登录',
        type: 'error'
      })
      // next('/home')
      router.push({ name: 'Signin' })
    } else {
      next()
    }
  }
})
// 全局后置拦截
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = "秒杀活动"
  }
})

export default router
