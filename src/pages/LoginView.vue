<template>
  <div class="login py-4 px-2">
    <v-snackbar top v-model="snackbar" :timeout="timeout">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text fab v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <h1 class="grey--text font-weight-light">Login</h1>
    <v-container fluid fill-height class="my-8">
      <v-layout justify-center xl="3">
        <v-flex xs12 sm8 xl4>
          <v-toolbar dark color="pink">
            <v-toolbar-title class="text-h5">Login form</v-toolbar-title>
          </v-toolbar>
          <v-card class="pa-8">
            <v-form class="py-8">
              <v-text-field
                outlined
                v-model="username"
                prepend-icon="mdi-account"
                name="login"
                label="Username"
                type="text"
              ></v-text-field>
              <v-text-field
                outlined
                v-model="password"
                id="password"
                prepend-icon="mdi-lock"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
            <v-card-actions>
              <v-layout column
                ><v-btn
                  :loading="loading"
                  large
                  class="mt-4 mb-12"
                  color="pink white--text"
                  width="128"
                  @click="login"
                  >Login</v-btn
                >
                <span class="text-center dark-grey--text">
                  Not registered? Create a account

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <a
                        class="pink--text text--center"
                        href="/register"
                        @click.stop
                        v-on="on"
                      >
                        hear
                      </a>
                    </template>
                    Goes to register page
                  </v-tooltip>
                  .</span
                ></v-layout
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AuthApi from "@/api/authApi";
export default {
  name: "UserLogin",
  data() {
    return {
      username: "",
      password: "",
      loading: false,
      snackbar: false,
      text: "Login failed",
      timeout: 2000,
    };
  },
  methods: {
    login() {
      this.loading = true;
      AuthApi.login(this.username, this.password)
        .then((user) => {
          this.saveLoggedUser(user);
          this.$router.push({ name: "resume" });
        })
        .catch(() => {
          this.snackbar = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    saveLoggedUser(user) {
      window.localStorage.setItem("loggedUser", user.id);
      window.localStorage.setItem("loggedUserInfos", JSON.stringify(user));
      window.localStorage.setItem("loggedUserToken", user.token);
    },
  },
  beforeDestroy() {
    this.$router.go();
  },
};
</script>
