<template>
  <div class="resume pt-8 px-2">
    <h1 class="text-h3 grey--text font-weight-black text--lighten-1">Resume</h1>

    <v-container class="my-8">
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          xl="2"
          xs="12"
          v-for="project in projects"
          :key="project.id"
        >
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" max-width="344">
              <v-card-text>
                <div>Categorie</div>
                <p class="text-h4 text--primary">{{ project.name }}</p>
                <p>
                  There are
                  {{
                    tasksProjects[project.name]
                      ? tasksProjects[project.name]
                      : 0
                  }}
                  {{
                    `${tasksProjects[project.name] === 1 ? "task" : "tasks"}`
                  }}
                  with that categorie
                </p>
              </v-card-text>
              <v-card-actions>
                <v-btn text :color="project.color"> Learn More </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <v-card
                  v-if="hover"
                  class="transition-fast-in-fast-out v-card--reveal"
                  style="height: 100%"
                >
                  <v-list-item three-line class="mb-4">
                    <v-list-item-content>
                      <div class="text-overline mb-4">STATUS</div>
                      <v-list-item-title class="text-h5">
                        Porcentage
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Tasks with that categorie</v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-progress-circular
                      width="16"
                      size="100"
                      class=""
                      :value="
                        tasksProjects[project.name]
                          ? (tasksProjects[project.name] / tasks.length) * 100
                          : 0
                      "
                      :color="project.color"
                    >
                      <span class="black--text font-weight-bold">
                        {{
                          tasksProjects[project.name]
                            ? (
                                (tasksProjects[project.name] / tasks.length) *
                                100
                              ).toFixed(1)
                            : 0
                        }}%
                      </span>
                    </v-progress-circular>
                  </v-list-item>

                  <v-card-actions class="pt-0">
                    <v-btn
                      text
                      :color="project.color"
                      router
                      :to="{
                        name: 'dashboardResume',
                        params: { categorie: project.name },
                      }"
                    >
                      Visualize
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>

        <v-btn
          plain
          router
          fab
          :to="{ name: 'dashboard' }"
          large
          color="pink"
          class="my-16"
        >
          <span>View all tasks</span>
          <v-icon right>mdi-arrow-right</v-icon></v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TaskApi from "@/api/taskApi";
import ProjectApi from "@/api/projectApi";
export default {
  name: "TasksResume",

  data() {
    return {
      tasks: [],
      projects: [],
      reveal: false,
    };
  },
  methods: {
    getTasks() {
      TaskApi.getTasks((response) => {
        this.tasks = response;
      });
    },
    getProjects() {
      ProjectApi.getProjects((response) => {
        this.projects = response;
        this.sortBy();
      });
    },
    getProjectQnt(name) {
      return name;
    },
    sortBy() {
      this.projects.sort((a, b) =>
        this.tasksProjects[a.name] - this.tasksProjects[b.name] ? -1 : 1
      );
    },
  },

  computed: {
    tasksProjects() {
      return this.tasks.reduce((a, b) => {
        a[b.project] = a[b.project] ? a[b.project] + 1 : 1;
        return a;
      }, {});
    },
  },
  created() {
    this.getTasks();
    this.getProjects();
  },
};
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
