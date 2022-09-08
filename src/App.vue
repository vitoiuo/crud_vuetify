<template>
  <v-app>
    <v-app-bar app dark color="pink" elevate-on-scroll>
      <v-toolbar-title class="title font-weight-bold"> Todoist</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-icon> mdi-magnify </v-icon> -->
      <v-app-bar-nav-icon />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app dark color="pink" min-height="64"> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
