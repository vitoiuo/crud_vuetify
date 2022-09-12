<template>
  <v-row justify="center" class="px-4">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn plain fab class="mx-2" v-bind="attrs" v-on="on"
          ><v-icon color="pink">mdi-delete</v-icon></v-btn
        >
      </template>
      <v-card>
        <v-card-title class="text-h5"> Delete task? </v-card-title>
        <v-card-text>
          Are you sure that you want to delete this task?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text @click="dialog = false"> No </v-btn>
          <v-btn
            color="pink darken-1"
            text
            @click="
              dialog = false;
              $emit('deletion-accepted');
            "
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
