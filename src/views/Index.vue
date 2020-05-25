<template>
  <v-container>
    <task-list />

    <task-dialog
      v-if="showTaskDialog"
      :action-type="actionType"
      :task-index="taskIndex"
      :show-task-dialog.sync="showTaskDialog"
    />

    <task-create-button @showTaskModal="openTaskDialog('create')" />
  </v-container>
</template>

<script>
import titleMixin from '@/mixins/titleMixin'
import { EventBus } from '@/eventBus.js'

export default {
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

  mixins: [titleMixin],

  title() {
    return `Dashboard`
  },

  data: () => ({
    showTaskDialog: false,
    actionType: null,
    taskIndex: null
  }),

  mounted() {
    EventBus.$on('showTaskDialog', ({ actionType }) => {
      this.showTaskDialog = true
      this.actionType = actionType
    })
  },

  methods: {
    openTaskDialog(actionType) {
      this.actionType = actionType
      this.showTaskDialog = true
    }
  }
}
</script>
