export default {
  namespaced: true,

  state: {
    tasks: []
  },

  mutations: {
    CREATE_TASK(state, task) {
      state.tasks.push(task)
    },

    UPDATE_TASK(state, index, task) {
      state.tasks[index] = task
    },

    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1)
    },

    SET_TASK_COMPLETE(state, index) {
      state.tasks[index].done = !state.tasks[index].done
    }
  },

  actions: {
    createTask({ commit }, task) {
      commit('CREATE_TASK', task)
    },

    updateTask({ commit }, index, task) {
      commit('SET_TASK_COMPLETE', index, task)
    },

    deleteTask({ commit }, index) {
      commit('DELETE_TASK', index)
    },

    updateTaskStatus({ commit }, index) {
      commit('SET_TASK_COMPLETE', index)
    }
  }
}
