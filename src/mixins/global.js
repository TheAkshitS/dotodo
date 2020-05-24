export default {
  computed: {
    $_taskList() {
      return this.$store.state.task.tasks
    }
  }
}
