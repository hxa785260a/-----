/**
 *@desc    注册全局公用组件
 *@author  hx
 *@date    2021/04/08
 */
 import Vue from 'vue'

 let components = [
  
 ]
 components.forEach(com => {
   Vue.component(com.name, com)
 })