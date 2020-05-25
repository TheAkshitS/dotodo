<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="title">Welcome to the secret route!</h2>
        <img
          src="https://media.giphy.com/media/NdKVEei95yvIY/giphy.gif"
          alt="a secret image"
          width="300"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import titleMixin from '@/mixins/titleMixin'

export default {
  mixins: [titleMixin],

  title() {
    return 'Secret'
  }
}
</script>
