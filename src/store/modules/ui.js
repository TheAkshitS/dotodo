export default {
  namespaced: true,

  state: {
    darkTheme: false
  },

  mutations: {
    UPDATE_DARK_THEME(state, status) {
      state.darkTheme = status
    }
  },

  actions: {
    changeTheme({ commit }, status) {
      commit('UPDATE_DARK_THEME', status)
    }
  }
}
