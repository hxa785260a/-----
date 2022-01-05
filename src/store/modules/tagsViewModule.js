/**
 *@desc    导航控制
 *@author  hx
 *@date    2019/04/08
 */
const state = {
  visitedViews: [],
  cachedViews: []
}
const getters = {}
const mutations = {
  // 添加显示菜单
  addVisitedView (state, view) {
    if (state.visitedViews.some(v => v.query.id === view.query.id)) {
      return
    }
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.query.title || '默认'
      })
    )
  },
  // 添加缓存菜单
  addCachedView (state, view) {
    if (state.cachedViews.includes(view.name)) {
      return
    }
    state.cachedViews.push(view.name)
  },
  // 删除显示菜单
  delVisitedView (state, view) {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.query.id === view.query.id) {
        state.visitedViews.splice(i, 1)
        break
      }
    }
  },
  // 删除缓存菜单
  delCachedView (state, view) {
    for (const i of state.cachedViews) {
      if (i === view.name) {
        const index = state.cachedViews.indexOf(i)
        state.cachedViews.splice(index, 1)
        break
      }
    }
  },
  delAllVisitedViews (state) {
    // keep affix tags
    const affixTags = state.visitedViews.filter(tag => tag.meta.affix)
    state.visitedViews = affixTags
  },
  delAllCachedViews (state) {
    state.cachedViews = []
  }
}
const actions = {
  addView ({ dispatch }, view) {
    dispatch('addVisitedView', view)
    dispatch('addCachedView', view)
  },
  addVisitedView ({ commit }, view) {
    commit('addVisitedView', view)
  },
  addCachedView ({ commit }, view) {
    commit('addCachedView', view)
  },

  delView ({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delVisitedView', view)
      dispatch('delCachedView', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },
  delVisitedView ({ commit, state }, view) {
    return new Promise(resolve => {
      commit('delVisitedView', view)
      resolve([...state.visitedViews])
    })
  },
  delCachedView ({ commit, state }, view) {
    return new Promise(resolve => {
      commit('delCachedView', view)
      resolve([...state.cachedViews])
    })
  },
  delAllVisitedViews ({ commit, state }) {
    return new Promise(resolve => {
      commit('delAllVisitedViews')
      resolve([...state.visitedViews])
    })
  },
  delAllCachedViews ({ commit, state }) {
    return new Promise(resolve => {
      commit('delAllCachedViews')
      resolve([...state.cachedViews])
    })
  },
  delAllViews ({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delAllVisitedViews', view)
      dispatch('delAllCachedViews', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
