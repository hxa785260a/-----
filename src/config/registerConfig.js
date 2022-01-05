/**
 *@desc    注册公用方法
 *@author  hx
 *@date    2021/04/08
 */
 import Vue from 'vue'
 import directiveConfig from '@/utils/directives/directiveConfig.js'
 import fifterConfig from '@/utils/fifters/fifterConfig.js'
 import methodConfig from '@/utils/methods/methodConfig.js'
 // 注册公共组件
  import '@/components/componentConfig'
 // 添加全局指令
 Vue.use(directiveConfig)
 // 添加全局过滤器
 Vue.use(fifterConfig)
 // 添加全局实例方法
 Vue.use(methodConfig)
 