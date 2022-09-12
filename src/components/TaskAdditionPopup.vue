<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          large
          color="pink"
          class="mb-16 white--text font-weight-bold"
          v-bind="attrs"
          v-on="on"
          ><v-icon left>mdi-plus</v-icon>
          <span>Add Task</span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Create task</span>
        </v-card-title>
        <v-card-text>
          <TaskForm />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn fab color="pink" text @click="dialog = false">
            <v-icon color="pink">mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import TaskForm from "@/components/TaskForm.vue";

export default {
  name: "AdditionPopup",
  components: {
    TaskForm,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>
