<template>
  <v-tooltip left>
    <template v-slot:activator="{ on }">
      <v-fab-transition>
        <v-btn
          v-show="!showCreateBtn"
          v-on="on"
          class="mx-a"
          fab
          fixed
          bottom
          right
          dark
          color="success"
          @click="$emit('showTaskModal', true)"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </template>
    <span>Create a new task</span>
  </v-tooltip>
</template>

<script>
export default {
  data: () => ({
    showCreateBtn: true
  }),

  mounted() {
    this.showCreateBtn = false
  }
}
</script>
