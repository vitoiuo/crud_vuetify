<template>
  <v-container fluid fill-height class="my-8">
    <v-layout justify-center xl="3">
      <v-flex xs12 sm8 xl4>
        <v-toolbar dark color="pink">
          <v-toolbar-title class="text-h5">Login form</v-toolbar-title>
        </v-toolbar>
        <v-card class="pa-8">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="newUser.name"
              :counter="124"
              :rules="[required]"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="newUser.email"
              :rules="[required, validEmail]"
              label="Email"
              required
            ></v-text-field>

            <v-text-field
              v-model="newUser.username"
              :counter="24"
              :rules="[required]"
              label="Username"
              required
            ></v-text-field>

            <v-text-field
              v-model="newUser.password"
              :rules="[required, min6]"
              label="Password"
              type="password"
              required
            ></v-text-field>

            <v-text-field
              v-model="confirmedPassword"
              :rules="[required, min6, matchingPasswords]"
              label="Confirm Password"
              type="password"
              required
            ></v-text-field>

            <v-checkbox
              v-model="checkbox"
              :rules="[required]"
              label="Do you agree with our terms?"
              required
            ></v-checkbox>
            <v-card-actions>
              <v-btn
                :disabled="!valid"
                color="pink white--text"
                class="mr-4 font-weight-bold"
                router
                :to="{ name: 'login' }"
              >
                Register
              </v-btn></v-card-actions
            >
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import authApi from "@/api/authApi";

export default {
  data: () => ({
    valid: true,
    newUser: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
    confirmedPassword: "",
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    required(value) {
      if (value) {
        return true;
      } else {
        return "This field is required.";
      }
    },
    min6(value) {
      if (value.length >= 6) {
        return true;
      } else {
        return "Password should have more than 6 characters.";
      }
    },
    matchingPasswords() {
      if (this.newUser.password === this.confirmedPassword) {
        return true;
      } else {
        return "Passwords does not match.";
      }
    },
    validEmail(value) {
      if (/.+@.+\..+/.test(value)) {
        return true;
      } else {
        return "E-mail must be valid";
      }
    },
    addUser() {
      authApi.singUp(this.newUser);
    },
  },
  beforeRouteDestroy() {
    this.addUser();
  },
};
</script>
