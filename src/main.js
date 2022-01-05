import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// 初始化样式
import '@/config/cssConfig'
import '@/config/registerConfig'
import router from '@/router'
import store from '@/store'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
  }
}).$mount('#app')