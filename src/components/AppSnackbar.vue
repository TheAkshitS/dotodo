<template>
  <v-snackbar
    bottom
    v-model="snackbar.visible"
    :color="snackbar.color"
    :timeout="snackbar.timeout"
  >
    {{ snackbar.text }}
  </v-snackbar>
</template>

<script>
import { EventBus } from '@/eventBus.js'

export default {
  data: () => ({
    snackbar: {
      visible: false,
      color: 'success',
      timeout: 2000,
      text: ''
    }
  }),

  mounted() {
    EventBus.$on('showNotification', ({ text, color }) => {
      this.snackbar.visible = true
      this.snackbar.text = text
      color ? (this.snackbar.color = color) : (this.snackbar.color = 'success')
    })
  }
}
</script>
