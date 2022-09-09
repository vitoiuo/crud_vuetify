<template>
  <v-card elevation="2" class="pa-4" max-width="1028">
    <v-row wrap class="py-4">
      <v-col xs12 md6>
        <div class="caption grey--text">Title</div>
        <div class="">{{ task.title }}</div>
      </v-col>
      <v-col xs6 sm4 md2>
        <div class="caption grey--text">Due to</div>
        <div>task.dueTo</div>
      </v-col>
      <v-col xs6 sm4 md2>
        <div class="caption grey--text">Categorie</div>
        <div>task.project</div>
      </v-col>
      <v-col xs6 sm4 md2>
        <div class="caption grey--text">Status</div>
        <v-icon color="pink"> mdi-check </v-icon>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn fab plain color="pink"><v-icon> mdi-pencil </v-icon></v-btn>
      <v-btn fab plain color="pink"><v-icon> mdi-delete </v-icon></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
}
</script>
