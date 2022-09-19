<template>
  <nav>
    <v-app-bar app dark color="pink" class="padding-a-4" elevate-on-scroll>
      <v-app-bar-nav-icon v-if="loggedUser" @click="drawer = !drawer" />
      <v-toolbar-title class="title text-uppercase">
        <a class="white--text" href="/">
          <span class="font-weight-black">Todo</span>
          <span class="font-weight-medium">Ist</span>
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu v-if="loggedUser">
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
      <v-btn
        plain
        router
        @click="loggedUser ? loggingOut() : $router.push({ name: 'login' })"
      >
        <span>{{ userMessage }}</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-layout column align-center>
        <v-flex class="mt-4 text-center">
          <v-menu bottom min-width="200px" rounded offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon x-large v-on="on">
                <v-avatar color="brown" size="64">
                  <span class="white--text text-h5">{{
                    loggedUser?.name
                      .split(" ")
                      .map((e) => e[0])
                      .join("")
                  }}</span>
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-avatar color="brown" size="64" class="mb-2">
                    <span class="white--text text-h5">{{
                      loggedUser?.name
                        .split(" ")
                        .map((e) => e[0])
                        .join("")
                    }}</span>
                  </v-avatar>
                  <h3>{{ loggedUser?.name }}</h3>
                  <p class="text-caption mt-1">{{ loggedUser?.email }}</p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text> Edit Account </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text @click="loggingOut">
                    Disconnect
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
          <p class="subheading mt-2 text-capitalize">
            {{ loggedUser?.username }}
          </p>
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
        { icon: "mdi-home", text: "Home", route: { name: "home" } },
        {
          icon: "mdi-bottle-tonic-plus",
          text: "Resume",
          route: { name: "resume" },
        },
        {
          icon: "mdi-view-dashboard",
          text: "Dasboard",
          route: { name: "dashboard" },
        },
      ],
    };
  },
  methods: {
    loggingOut() {
      localStorage.clear();
      this.$router.go();
    },
  },
  computed: {
    userMessage() {
      if (!this.loggedUser) {
        return "Sign in";
      }
      return "Sign out";
    },
    loggedUser() {
      if (localStorage.getItem("loggedUserInfos")) {
        return JSON.parse(localStorage.getItem("loggedUserInfos"));
      }
      return undefined;
    },
  },
};
</script>
