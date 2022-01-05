/**
 *@desc    路由拦截配置
 *@author  hx
 *@date    2021/04/08
 */
import Vue from 'vue'
import Router from 'vue-router'
import allRouter from '@/router/routerConfig.js'
import { Message } from 'element-ui'
Vue.use(Router)
let router = new Router({
  routes: [...allRouter],
  scrollBehavior (to, from, savedPosition) {
   
    return { x: 0, y: 0 }
  }
})
// 全局前置钩子函数
router.beforeEach((to, from, next) => {
       next()
})

// 全局后置钩子函数
router.afterEach((to, from) => {

})

router.onError(() => {
  Message.error('菜单配置有误,请联系菜单管理员')
})
export default router
