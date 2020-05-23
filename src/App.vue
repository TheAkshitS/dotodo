<template>
  <v-app>
    <app-header />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {
    AppHeader: () =>
      import(/* webpackChunkName: "appHeader" */ '@/components/AppHeader')
  },

  data: () => ({
    //
  })
}
</script>

<style>
/* For removing default scrollbar when content is not more than the viewport  */
html {
  overflow-y: auto !important;
}
</style>
