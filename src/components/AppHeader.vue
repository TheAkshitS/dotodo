<template>
  <v-app-bar app color="success" dark>
    <v-toolbar-title dark class="text-uppercase ">
      <span class="font-weight-light">✔&nbsp;DO</span>
      <span>&nbsp;It</span>
    </v-toolbar-title>

    <v-spacer />

    <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      <v-icon v-if="this.$vuetify.theme.dark">mdi-brightness-7</v-icon>
      <v-icon v-else>mdi-brightness-4</v-icon>
    </v-btn>
  </v-app-bar>
</template>
