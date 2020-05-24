<template>
  <v-btn icon @click="deleteTask(taskIndex)">
    <v-icon>mdi-delete</v-icon>
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    taskIndex: {
      type: Number,
      required: true
    }
  },

  methods: {
    ...mapActions({
      deleteTask: 'task/deleteTask'
    })
  }
}
</script>
