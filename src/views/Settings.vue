<template>
  <v-container>
    <h2 class="title">Settings</h2>
    <v-row>
      <v-col>
        <h3 class="subtitle-2 my-3">
          <v-icon left small>mdi-theme-light-dark</v-icon>Theme
        </h3>

        <v-btn-toggle
          :value="isDarkTheme"
          dense
          mandatory
          rounded
          @change="changeTheme"
        >
          <v-btn v-for="theme in themes" :key="theme.name" :value="theme.name">
            <v-icon>{{ theme.icon }}</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    themes: [
      { name: 'light', icon: 'mdi-brightness-7' },
      { name: 'dark', icon: 'mdi-brightness-4' }
    ]
  }),

  computed: {
    isDarkTheme: {
      immediate: true,
      get() {
        return this.$store.state.ui.darkTheme ? 'dark' : 'light'
      }
    }
  },

  methods: {
    async changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      await this.$store.dispatch('ui/changeTheme', this.$vuetify.theme.dark)
    }
  }
}
</script>
