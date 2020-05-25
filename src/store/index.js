import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import ui from './modules/ui'
import task from './modules/task'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { ui, task, user },
  plugins: [createPersistedState()]
})
