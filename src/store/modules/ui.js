export default {
  namespaced: true,

  state: {
    darkTheme: false,
    selectedLanguage: 'en'
  },

  mutations: {
    UPDATE_DARK_THEME(state, status) {
      state.darkTheme = status
    },

    UPDATE_SELECTED_LANGUAGE(state, language) {
      state.selectedLanguage = language
    }
  },

  actions: {
    changeTheme({ commit }, status) {
      commit('UPDATE_DARK_THEME', status)
    },

    changeLanguage({ commit }, language) {
      commit('UPDATE_SELECTED_LANGUAGE', language)
    }
  }
}
