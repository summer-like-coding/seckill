import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import Router from 'vue-router';
import lodash from "lodash";
import moment from 'moment';
// 注册全局组件
import Pagination from './components/pagination';

import '../theme/index.css'

// 引入mock
// import './mock/mockServer'


Vue.component(Pagination.name,Pagination)

Vue.config.productionTip = false
Vue.use(ElementUI);


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
