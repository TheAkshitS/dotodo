export default {
  computed: {
    $_taskList() {
      return this.$store.state.task.tasks
    },

    $_isUserLoggedin() {
      return this.$store.getters['user/isUserLoggedIn']
    }
  }
}
