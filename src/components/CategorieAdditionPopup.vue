<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        large
        plain
        color="pink"
        class="ml-4 mb-16 white--text font-weight-bold"
        v-bind="attrs"
        v-on="on"
        ><v-icon left>mdi-tag</v-icon>
        <span>Add Categorie</span>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Create categorie</span>
      </v-card-title>
      <v-card-text>
        <CategorieForm />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn fab color="pink" text @click="dialog = false">
          <v-icon color="pink">mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CategorieForm from "@/components/CategorieForm.vue";

export default {
  name: "CategorieAdditionPopup",
  components: {
    CategorieForm,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>
