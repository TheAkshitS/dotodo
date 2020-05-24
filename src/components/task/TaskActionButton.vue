<template>
  <v-btn icon @click="taskAction">
    <v-icon>{{ taskIcon }}</v-icon>
  </v-btn>
</template>

<script>
import { EventBus } from '@/eventBus.js'
import { mapActions } from 'vuex'

export default {
  props: {
    task: {
      type: Object,
      required: true
    },

    taskIndex: {
      type: Number,
      required: true
    },

    actionType: {
      type: String,
      required: true
    }
  },

  computed: {
    taskIcon() {
      if (this.actionType === 'edit') return 'mdi-pencil'
      return 'mdi-delete'
    }
  },

  methods: {
    ...mapActions({
      deleteTask: 'task/deleteTask',
      editTask: 'task/updateTask'
    }),

    taskAction() {
      if (this.actionType === 'edit') this.editTask()
      else {
        this.deleteTask(this.taskIndex)
        EventBus.$emit('showNotification', {
          text: 'Task deleted successfully ✅'
        })
      }
    }
  }
}
</script>
