import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import Router from 'vue-router'
// 注册全局组件
import Pagination from './components/pagination';

// import '../theme/index.css'

// 引入mock
// import './mock/mockServer'


Vue.component(Pagination.name,Pagination)

Vue.config.productionTip = false
Vue.use(ElementUI);


//引入全局事件总线
// export const $bus = new Vue()
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// console.log(store.state.role);

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  store,
  Pagination,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus= this
  }
}).$mount('#app')
