<template>
  <nav>
    <v-app-bar app dark color="pink" class="padding-a-4" elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="title text-uppercase">
        <span class="font-weight-black">Todo</span>
        <span class="font-weight-medium">Ist</span>
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
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-account", text: "Account", route: "/accounts" },
      ],
    }
  },
}
</script>
