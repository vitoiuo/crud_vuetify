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
      :rules="passwordRules"
      label="Password"
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
    nameRules: [
      (v) => !!v || "Username is required",
      (v) =>
        (v && v.length <= 10) || "Username must be less than 10 characters",
      (v) => (v && v.length > 3) || "Username must be bigger than 3 characters",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 8) || "Password must be bigger than 8 characters",
    ],
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
  },
};
</script>
