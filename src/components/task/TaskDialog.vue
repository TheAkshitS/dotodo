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

        <v-form ref="createTaskForm" @submit.prevent="createTask">
          <v-card-text>
            <v-text-field
              outlined
              color="success"
              label="Task name"
              :rules="taskNameRules"
              v-model.trim="task.name"
            />
            <v-textarea
              outlined
              color="success"
              label="Task details"
              v-model.trim="task.details"
            />
          </v-card-text>

          <v-card-actions>
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

export default {
  props: {
    showTaskDialog: {
      type: Boolean,
      required: true
    },

    actionType: {
      type: String,
      required: true
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

  destroyed() {
    this.resetTask()
  },

  methods: {
    async createTask() {
      if (this.$refs.createTaskForm.validate()) {
        await this.$store.dispatch('task/createTask', this.task)
        this.$emit('update:showTaskDialog', false)
        EventBus.$emit('showNotification', {
          text: 'Task created successfully ✅'
        })
      }
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
