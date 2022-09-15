<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Username"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
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
      :rules="[(v) => !!v || 'You must agree to continue!']"
      label="Do you agree with our terms?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="pink white--text"
      class="mr-4 font-weight-bold"
      @click="validate"
    >
      Validate
    </v-btn>
  </v-form>
</template>

<script>
export default {};
</script>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    password: "",
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
      if (this.password === this.confirmedPassword) {
        return true;
      } else {
        return "Passwords does not match.";
      }
    },
  },
};
</script>
