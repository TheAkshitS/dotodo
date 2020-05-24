<template>
  <v-container>
    <task-list />

    <task-dialog
      v-if="showTaskDialog"
      :action-type="actionType"
      :show-task-dialog.sync="showTaskDialog"
    />

    <task-create-button @showTaskModal="openTaskDialog('create')" />
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showTaskDialog: false,
    actionType: null
  }),

  components: {
    TaskCreateButton: () =>
      import(
        /* webpackChunkName: "TaskCreateButton" */ '@/components/task/TaskCreateButton'
      ),
    TaskList: () =>
      import(/* webpackChunkName: "TaskList" */ '@/components/task/TaskList'),
    TaskDialog: () =>
      import(
        /* webpackChunkName: "TaskDialog" */ '@/components/task/TaskDialog'
      )
  },

  methods: {
    openTaskDialog(actionType) {
      this.actionType = actionType
      this.showTaskDialog = true
    }
  }
}
</script>
