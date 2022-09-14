<template>
  <v-form ref="form" class="px-4 pt-4" v-model="valid" lazy-validation>
    <v-col sm="6" md="8">
      <v-text-field
        v-model="categorie.name"
        :counter="12"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
    </v-col>
    <v-col sm="6" md="8" class="mb-16">
      <div class="my-4 subtitle">Pick a color</div>
      <v-color-picker
        v-model="color"
        dot-size="25"
        hide-canvas
        hide-inputs
        hide-mode-switch
        hide-sliders
        mode="hexa"
        show-swatches
        swatches-max-height="100"
      ></v-color-picker>
    </v-col>

    <v-col sm="6" md="8">
      <v-btn
        large
        :disabled="!valid"
        color="pink white--text"
        class="mt- mr-4 font-weight-bold"
        @click="
          validate();
          $emit('categorie-added', categorie);
        "
      >
        Create categorie
      </v-btn>
    </v-col>
  </v-form>
</template>

<script>
export default {};
</script>

<script>
export default {
  data: () => ({
    categorie: {
      id: undefined,
      name: undefined,
      color: undefined,
    },
    color: undefined,
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
  watch: {
    color() {
      this.categorie.color = this.color?.hex;
    },
  },
};
</script>
