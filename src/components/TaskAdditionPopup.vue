<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        large
        plain
        color="pink"
        class="white--text font-weight-bold"
        v-bind="attrs"
        v-on="on"
        @click="loading = true"
        ><v-icon left>mdi-briefcase</v-icon>
        <span>Add Task</span>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Create task</span>
      </v-card-title>
      <v-card-text>
        <TaskForm
          :projects="projects"
          @task-added="
            (task) => {
              $emit('task-added', task);
              dialog = false;
              loading = false;
            }
          "
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          fab
          color="pink"
          text
          @click="
            dialog = false;
            loading = false;
          "
        >
          <v-icon color="pink">mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import TaskForm from "@/components/TaskForm.vue";

export default {
  name: "TaskAdditionPopup",
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  components: {
    TaskForm,
  },
  data: () => ({
    dialog: false,
    loading: false,
  }),
};
</script>
