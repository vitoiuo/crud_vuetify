<template>
  <div>
    <v-expansion-panels inset focusable v-model="showContent">
      <v-expansion-panel
        @click="$emit('editing-task')"
        v-click-outside="disableExpansionPanel"
        :disabled="task.isDone"
      >
        <v-expansion-panel-header disable-icon-rotate>
          <template v-slot:actions>
            <DelPopup @deletion-accepted="$emit('task-deleted', task.id)" />
            <v-icon color="pink"> mdi-pencil </v-icon>
          </template>
          <v-row wrap class="pa-4">
            <v-col xs12 md6>
              <div class="caption grey--text">Title</div>
              <div class="text-capitalize">
                {{ task.title }}
              </div>
            </v-col>
            <v-col xs6 sm4 md2>
              <div class="caption grey--text">Due to</div>
              <div>{{ task.dueTo }}</div>
            </v-col>
            <v-col xs6 sm4 md2>
              <div>
                <v-chip
                  dark
                  color="pink"
                  class="caption my-2 font-weight-bold"
                  >{{ task.project }}</v-chip
                >
              </div>
            </v-col>
            <v-col xs6 sm4 md2>
              <div class="caption grey--text">Status</div>
              <v-icon :class="{ 'mx-2': true, 'icon-done': task.isDone }"
                >mdi-check</v-icon
              >
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <TaskForm
            :task="task"
            :projects="projects"
            @task-edited="
              (taskInput) => {
                $emit('task-edited', taskInput);
                $emit('editing-task');
                disableExpansionPanel();
              }
            "
          />

          <!-- <v-btn fab plain color="pink" max-width="52"
            ><v-icon> mdi-delete </v-icon></v-btn
          > -->
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import TaskForm from "./TaskForm.vue";
import DelPopup from "@/components/DeletionPopup.vue";

export default {
  components: {
    TaskForm,
    DelPopup,
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showContent: null,
    };
  },
  methods: {
    disableExpansionPanel() {
      this.showContent = -1;
    },
  },
};
</script>

<style scoped>
.icon-done {
  color: #ff477e;
}
</style>
