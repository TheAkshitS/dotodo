<template>
  <v-app-bar app color="success" dark>
    <v-toolbar-title
      dark
      class="text-uppercase cursor-pointer"
      @click="$router.push({ name: 'Index' })"
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
