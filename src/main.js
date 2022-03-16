import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// 注册全局组件
import Pagination from './components/pagination'

Vue.component(Pagination.name,Pagination)

Vue.config.productionTip = false
Vue.use(ElementUI);


//引入全局事件总线
// export const $bus = new Vue() 


new Vue({
  router,
  store,
  Pagination,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus= this
  }
}).$mount('#app')
