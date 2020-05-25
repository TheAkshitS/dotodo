import { EventBus } from '@/eventBus.js'

export default {
  namespaced: true,

  state: {
    users: [
      { email: 'test@gmail.com', password: '123456', token: 'sadfdfej345j' },
      { email: 'user@gmail.com', password: '123456', token: 'f345gersdurj' }
    ],
    currentUser: {}
  },

  getters: {
    isUserLoggedIn(state) {
      if (state.currentUser && state.currentUser.token) return true
      return false
    }
  },

  mutations: {
    SET_CURRENT_USER(state, user) {
      state.currentUser = user
    }
  },

  actions: {
    login({ state, commit }, { email, password }) {
      const allUsers = state.users
      const userIndex = allUsers.findIndex(
        user => user.email == email && user.password == password
      )
      if (userIndex === -1) {
        EventBus.$emit('showNotification', {
          text: 'Invalid credentials.',
          color: 'red'
        })
        return false
      } else {
        commit('SET_CURRENT_USER', allUsers[userIndex])
        EventBus.$emit('showNotification', {
          text: 'Logged in successfully 🙌'
        })
        return true
      }
    },

    logout({ commit }) {
      commit('SET_CURRENT_USER', {})
      EventBus.$emit('showNotification', {
        text: 'Logged out successfully 🙌'
      })
    }
  }
}
