<template>
  <nav>
    <v-app-bar app dark color="pink" elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="title text-uppercase">
        <span class="font-weight-bold">Todo</span>
        <span class="font-weight-light">Ist</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-icon> mdi-magnify </v-icon> -->
      <v-btn plain>
        <span>Sign out</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      color="#F5F5F5
"
    >
      <p>test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
