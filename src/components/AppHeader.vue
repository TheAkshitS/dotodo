<template>
  <v-app-bar app color="success" dark>
    <v-toolbar-title
      dark
      class="text-uppercase cursor-pointer"
      @click="navigateToHome"
    >
      <span class="font-weight-light">✅&nbsp;Do</span>
      <span>&nbsp;todo</span>
    </v-toolbar-title>

    <v-spacer />

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon to="/settings" v-on="on"
          ><v-icon>mdi-cog-outline</v-icon></v-btn
        >
      </template>
      <span>Settings</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      if (this.$route.name !== 'Index') this.$router.push({ name: 'Index' })
    }
  }
}
</script>
