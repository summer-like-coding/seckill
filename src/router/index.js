import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import Home from '../views/home.vue'
import Errmsg from '../views/errmsg.vue'
import Signin from '../views/signin.vue'
import Signup from '../views/signup.vue'
import Imessage from '../views/imessage.vue'
// public用户的页面

import Orders from '../views/public/orders.vue'
import Grap from '../views/public/grap.vue'

// admin用户页面
import Activities from '../views/admin/activities'
import Manage from '../views/admin/manage'
import Details from '../views/admin/details'
import Rules from "../views/admin/rules";
import Variables from '../views/admin/variables.vue'

//root用户界面
import Promote from '../views/root/promote'

import store from '../store'
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // moudle
})


// 全局前置拦截
router.beforeEach(async (to, from, next) => {
  // 如果我已经获取到了token，那么就表示，我已经登录过了，那么就登陆不了
  if (localStorage.getItem("TOKEN")) {
    if (to.path === '/signin' || to.path === '/signup') {
      next('/home')
    } else {
      // 我不是去注册登录，对于其他页面只要没有用户名的，我都不允许进入
      // 这时候就要判断类型
      // alert('你已经登录或注册过了')
      // 我需要在页面上显示用户名
      if (store.state.user.userInfo.userName) {
        console.log("我有用户名，直接跳转");
        next()
      } else {
        let phone = localStorage.getItem("PHONE");
        console.log("--------,用phone查询信息");
        console.log("我是phone", phone);
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
      next('/home')
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
