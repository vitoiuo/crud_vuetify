<template>
  <div>
    <v-card
      :disabled="task.isDone"
      elevation="2"
      max-width="2048"
      class="pa-4 mb-8"
    >
      <v-row wrap class="pa-4">
        <v-col xs12 md6>
          <div class="caption grey--text">Title</div>
          <div class="text-capitalize">{{ task.title }}</div>
        </v-col>
        <v-col xs6 sm4 md2>
          <div class="caption grey--text">Due to</div>
          <div>{{ task.dueTo }}</div>
        </v-col>
        <v-col xs6 sm4 md2>
          <div>
            <v-chip dark color="pink" class="caption my-2 font-weight-bold">{{
              task.project
            }}</v-chip>
          </div>
        </v-col>
        <v-col xs6 sm4 md2>
          <div class="caption grey--text">Status</div>
          <v-icon :class="{ 'mx-2': true, 'icon-done': task.isDone }"
            >mdi-check</v-icon
          >
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn fab plain color="pink"><v-icon> mdi-pencil </v-icon></v-btn>
        <v-btn fab plain color="pink"><v-icon> mdi-delete </v-icon></v-btn>
      </v-card-actions>
    </v-card>
  </div>
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

<style scoped>
.icon-done {
  color: #ff477e;
}
</style>
