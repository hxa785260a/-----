/**
 *@desc    所有的侧滑栏控制
 *@author hx
 *@date    2021/04/08
 */
const state = {
  isLeftMenu: true // 左侧主菜单
}
const getters = {}
const mutations = {
  // state 等同于 `store.state`，
  // payload 参数
  setIsLeftMenu (state, payload) {
    state.isLeftMenu = payload
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
