<template>
  <v-app>
    <app-header />

    <v-content>
      <router-view />
    </v-content>

    <app-snackbar />
  </v-app>
</template>

<script>
export default {
  components: {
    AppHeader: () =>
      import(/* webpackChunkName: "appHeader" */ '@/components/AppHeader'),
    AppSnackbar: () =>
      import(/* webpackChunkName: "AppSnackbar" */ '@/components/AppSnackbar')
  }
}
</script>

<style>
/* For removing default scrollbar when content is not more than the viewport  */
html {
  overflow-y: auto !important;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
