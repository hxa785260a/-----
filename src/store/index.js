/**
 *@desc    全局vuex配置
 *@author  hx
 *@date    2021/04/08
 */
import Vue from 'vue'
import Vuex from 'vuex'
import allModule from '@/store/storeConfig.js'

Vue.use(Vuex)
const state = {
  reqCount: 0, // 当前请求数量

}
const getters = {}
const mutations = {
  setLoading (state, payload = 'create') {
    if (payload === 'create') {
      state.reqCount = state.reqCount + 1
    } else if (payload === 'finish') {
      state.reqCount = state.reqCount - 1
    }
  },
}
const actions = {}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    ...allModule
  }
})
