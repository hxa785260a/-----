/**
 *@desc    vuex说明
 *@author hx
 *@date    2021/04/08
 */
// .vue中使用语法糖来操作store
// mapState
// mapGetters
// mapActions
// mapMutations
const state = {
  demo: '我是状态'
}
const getters = {
  // state,        如果在模块中定义则为模块的局部状态
  // getters,      等同于 store.getters
  // rootState     等同于 store.state
  // rootGetters   所有 getters
  tranformDemo: (state, getters, rootState, rootGetters) => {
    return state.demo + '我改变了'
  }
}
const mutations = {
  // state 等同于 `store.state`，
  // payload 参数
  setdemo (state, payload) {
    state.demo = payload
  }
}
const actions = {
  // state,       等同于 `store.state`，若在模块中则为局部状态
  // rootState,   等同于 `store.state`，只存在于模块中
  // commit,      等同于 `store.commit`
  // dispatch,    等同于 `store.dispatch`
  // getters,     等同于 `store.getters`
  // rootGetters  等同于 `store.getters`，只存在于模块中
  // payload       参数
  demo ({ state, rootState, commit, dispatch, getters, rootGetters }, payload) {
    commit('setdemo', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
