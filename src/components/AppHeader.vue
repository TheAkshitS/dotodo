<template>
  <v-app-bar app color="success" dark>
    <v-toolbar-title dark class="text-uppercase">
      <span class="font-weight-light">✔&nbsp;DO</span>
      <span>&nbsp;It</span>
    </v-toolbar-title>

    <v-spacer />

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" @click="changeTheme">
          <v-icon v-if="!isDarkTheme">mdi-brightness-7</v-icon>
          <v-icon v-else>mdi-brightness-4</v-icon>
        </v-btn>
      </template>
      <span>Create a new task</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    isDarkTheme: {
      immediate: true,
      get() {
        return this.$store.state.ui.darkTheme
      },
      set() {
        this.changeTheme()
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
