/**
 *@desc    路由,权限统一配置
 *@author hx
 *@date    2021/04/08
 */
import router from '@/router'
const state = {
  menuList: [] // 左侧菜单
}
const getters = {}
const mutations = {
  // 动态添加主界面路由，需要缓存
  updateAppRouter (state, routes) {
    router.addRoutes(routes)
  },
  // 最后添加404路由
  updateDefaultRouter (state, routes) {
    router.addRoutes(routes)
  },
  updateMenulist (state, routes) {
    state.menuList = routes
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
