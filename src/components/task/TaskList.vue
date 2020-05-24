<template>
  <v-row justify="center">
    <v-col md="10" lg="8">
      <v-container fluid>
        <v-col>
          <v-row justify="space-between">
            <span class="title">
              My tasks
            </span>

            <span>{{ $_taskList.length }} task</span>
          </v-row>
        </v-col>
      </v-container>

      <v-list dense>
        <template v-for="(task, index) in $_taskList">
          <v-list-item two-line :key="task.id">
            <v-checkbox
              color="success"
              class="mr-5"
              :input-value="task.done"
              @change="updateTaskStatus(index)"
            />

            <v-list-item-content>
              <v-list-item-title
                class="title mb-1"
                :class="task.done ? 'done' : ''"
                >{{ task.name }}</v-list-item-title
              >
              <v-list-item-subtitle>{{ task.details }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <TaskEditButton />
            </v-list-item-icon>

            <v-list-item-icon>
              <Task-delete-button :taskIndex="index" />
            </v-list-item-icon>
          </v-list-item>
          <v-divider v-if="index !== $_taskList.length - 1" :key="index" />
        </template>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {
    TaskEditButton: () =>
      import(
        /* webpackChunkName: "TaskEditButton" */ '@/components/task/TaskEditButton'
      ),
    TaskDeleteButton: () =>
      import(
        /* webpackChunkName: "TaskDeleteButton" */ '@/components/task/TaskDeleteButton'
      )
  },
  methods: {
    ...mapActions({
      updateTaskStatus: 'task/updateTaskStatus'
    })
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
