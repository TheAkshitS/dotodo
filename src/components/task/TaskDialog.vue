<template>
  <v-row justify="center">
    <v-dialog v-model="isDialogOpen" persistent max-width="600">
      <v-card>
        <!-- TODO:Change title dynamically -->
        <v-card-title class="headline"
          >{{ actionType | capitalize }} a task<v-spacer />
          <v-btn large icon @click="$emit('update:showTaskDialog', false)">
            <v-icon>mdi-close</v-icon></v-btn
          >
        </v-card-title>

        <v-form ref="createTaskForm" @submit.prevent="submitForm">
          <v-card-text>
            <v-text-field
              outlined
              color="success"
              label="Task name"
              :disabled="actionType === 'view'"
              :rules="taskNameRules"
              v-model.trim="task.name"
            />
            <v-textarea
              outlined
              color="success"
              label="Task details"
              :disabled="actionType === 'view'"
              v-model.trim="task.details"
            />
          </v-card-text>

          <v-card-actions v-if="actionType !== 'view'">
            <v-spacer />
            <v-btn color="green darken-1" text type="submit">{{
              actionType === 'create' ? 'Create' : 'Update'
            }}</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { EventBus } from '@/eventBus.js'
import { mapActions } from 'vuex'

export default {
  props: {
    showTaskDialog: {
      type: Boolean,
      required: true
    },

    actionType: {
      type: String,
      required: true
    },

    taskIndex: {
      default: null
    }
  },

  data: () => ({
    task: {
      id: Math.random()
        .toString(16)
        .slice(2),
      name: '',
      details: '',
      done: false,
      createdAt: new Date()
    },
    taskNameRules: [v => !!v || 'Name is required']
  }),

  computed: {
    isDialogOpen: {
      get() {
        return this.showTaskDialog
      },
      set() {
        this.$emit('update:showTaskDialog', false)
      }
    }
  },

  mounted() {
    if (this.actionType === 'edit' || this.actionType === 'view')
      this.task = this.$store.state.task.selectedTask
  },

  destroyed() {
    this.resetTask()
  },

  methods: {
    ...mapActions({
      createTask: 'task/createTask',
      updateTask: 'task/updateTask'
    }),

    async submitForm() {
      if (this.$refs.createTaskForm.validate()) {
        if (this.actionType === 'edit') this.editTask()
        else this.createNewTask()

        this.$emit('update:showTaskDialog', false)
      }
    },

    async createNewTask() {
      await this.createTask(this.task)

      EventBus.$emit('showNotification', {
        text: 'Task created successfully ✅'
      })
    },

    async editTask() {
      await this.updateTask(this.taskIndex, this.task)

      EventBus.$emit('showNotification', {
        text: 'Task updated successfully ✅'
      })
    },

    resetTask() {
      this.task = {
        id: Math.random()
          .toString(16)
          .slice(2),
        name: '',
        details: '',
        done: false,
        createdAt: new Date()
      }
    }
  }
}
</script>
