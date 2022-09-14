<template>
  <nav>
    <v-app-bar app dark color="pink" class="padding-a-4" elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="title text-uppercase">
        <span class="font-weight-black">Todo</span>
        <span class="font-weight-medium">Ist</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="d-none d-sm-flex" plain v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.route"
            color="pink"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title> {{ link.text }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-divider class="mx-4" vertical></v-divider>
      <v-btn plain router :to="{ name: 'login' }">
        <span>Sign in</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="pt-4" app>
      <v-layout column align-center>
        <v-flex class="mt-4 text-center">
          <v-avatar size="100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74JdjUsxNBQI_GtRFhMqrrazJsBljIhYp6gQALCqJww&s"
              alt=""
            />
          </v-avatar>
          <p class="subheading mt-1">Danonangus</p>
        </v-flex>
      </v-layout>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            color="pink"
            v-for="(link, index) in links"
            @click="drawer = false"
            mobile-breakpoint
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
        {
          icon: "mdi-bottle-tonic-plus",
          text: "Resume",
          route: "resume",
        },
        {
          icon: "mdi-view-dashboard",
          text: "Dasboard",
          route: "dashboard",
        },
      ],
    };
  },
};
</script>
