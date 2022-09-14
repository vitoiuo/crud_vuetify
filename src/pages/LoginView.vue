<template>
  <div class="login py-4 px-2">
    <h1 class="grey--text font-weight-light">Login</h1>
    <v-container fluid fill-height class="my-8">
      <v-layout justify-center>
        <v-flex xs12 sm8 xl4>
          <v-toolbar dark color="pink">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card class="pa-8">
            <v-form class="py-8">
              <v-text-field
                v-model="username"
                prepend-icon="mdi-account"
                name="login"
                label="Username"
                type="text"
              ></v-text-field>
              <v-text-field
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
                  <a class="pink--text text--center" href="/register">hear</a
                  >.</span
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
import TaskApi from "@/taskApi";
export default {
  name: "UserLogin",
  data() {
    return {
      username: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    login() {
      this.loading = true;
      TaskApi.login(this.username, this.password)
        .then((resp) => {
          console.log("login ok", resp);
          this.$router.push({ name: "taskList" });
        })
        .catch((error) => {
          console.log("login falhou", error);
          //mostrar toast de usuário ou senha inválidos
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
