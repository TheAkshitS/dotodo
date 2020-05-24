<template>
  <v-row justify="center">
    <v-col md="10" lg="8">
      <v-container fluid>
        <v-col>
          <v-row justify="space-between">
            <span class="title">
              My tasks
            </span>

            <span
              ><strong>{{ $_taskList.length }}</strong> tasks</span
            >
          </v-row>
        </v-col>
      </v-container>

      <v-list v-if="!$_taskList.length">
        <v-list-item-content>
          <v-list-item-title class="ml-4"
            >You have {{ $_taskList.length }} tasks, add
            some.</v-list-item-title
          >
        </v-list-item-content>
      </v-list>

      <v-list dense v-else>
        <template v-for="(task, index) in $_taskList">
          <v-list-item two-line :key="task.id">
            <v-checkbox
              color="success"
              class="mr-5"
              :input-value="task.done"
              @change="updateCompleteStatus(index)"
            />

            <v-list-item-content class="cursor-pointer" @click="openTask(task)">
              <v-list-item-title
                class="title mb-1"
                :class="task.done ? 'done' : ''"
                >{{ task.name }}</v-list-item-title
              >
              <v-list-item-subtitle>{{ task.details }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <task-action-button
                :task="task"
                :task-index="index"
                :action-type="'edit'"
              />
            </v-list-item-icon>

            <v-list-item-icon>
              <Task-action-button
                :task="task"
                :task-index="index"
                :action-type="'delete'"
              />
            </v-list-item-icon>
          </v-list-item>
          <v-divider v-if="index !== $_taskList.length - 1" :key="index" />
        </template>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import { EventBus } from '@/eventBus.js'
import { mapActions } from 'vuex'

export default {
  components: {
    TaskActionButton: () =>
      import(
        /* webpackChunkName: "TaskActionButton" */ '@/components/task/TaskActionButton'
      )
  },
  methods: {
    ...mapActions({
      updateTaskStatus: 'task/updateTaskStatus',
      setSelectedTask: 'task/setSelectedTask'
    }),

    async updateCompleteStatus(taskIndex) {
      await this.updateTaskStatus(taskIndex)

      EventBus.$emit('showNotification', {
        text: 'Task completed 🎉'
      })
    },

    async openTask(task) {
      await this.setSelectedTask(task)

      EventBus.$emit('showTaskDialog', {
        actionType: 'view'
      })
    }
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
