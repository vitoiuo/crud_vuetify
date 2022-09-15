<template>
  <div class="resume pt-8 px-2">
    <h1 class="text-h3 grey--text font-weight-black">Resume</h1>

    <v-container class="my-8">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          xl="2"
          xs="12"
          v-for="project in projects"
          :key="project.id"
        >
          <v-card class="mx-auto my-2 pa-4" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">STATUS</div>
                <v-list-item-title class="text-h5 mb-1">
                  {{ project.name }}
                </v-list-item-title>
                <v-list-item-subtitle
                  >There are
                  {{
                    tasksProjects[project.name]
                      ? tasksProjects[project.name]
                      : 0
                  }}
                  {{
                    `${tasksProjects[project.name] === 1 ? "task" : "tasks"}`
                  }}
                  with that categorie</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-progress-circular
                width="16"
                size="80"
                :value="
                  tasksProjects[project.name]
                    ? (tasksProjects[project.name] / tasks.length) * 100
                    : 0
                "
                :color="project.color"
              ></v-progress-circular>
            </v-list-item>

            <v-card-actions>
              <v-btn rounded :color="project.color" class="white--text">
                Visualize
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TaskApi from "@/taskApi";
import ProjectApi from "@/projectApi";
export default {
  name: "TasksResume",

  data() {
    return {
      tasks: [],
      projects: [],
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
      });
    },
    getProjectQnt(name) {
      return name;
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
