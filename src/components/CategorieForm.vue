<template>
  <v-form ref="form" class="px-4" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="12"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-color-picker class="my-16" hide-inputs></v-color-picker>

    <v-btn
      large
      :disabled="!valid"
      color="pink white--text"
      class="mt- mr-4 font-weight-bold"
      @click="validate"
    >
      Create categorie
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
      (v) => !!v || "Categorie name is required",
      (v) =>
        (v && v.length <= 12) ||
        "Categorie name must be less than 12 characters",
      (v) =>
        (v && v.length > 3) ||
        "Categorie name must be bigger than 3 characters",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  mounted() {
    this.validate();
  },
};
</script>
