<template>
  <div class="dashboard pt-8 px-2">
    <h1 class="grey--text font-weight-light">Dashboard</h1>
    <v-container class="my-8">
      <!-- <v-btn
        :disabled="editMode"
        fab
        color="pink"
        class="mb-8 white--text"
        @click="toggleModes"
        ><v-icon>{{ navIcon }}</v-icon></v-btn
      > -->

      <div class="mb-8">
        <h2 class="text-h4 grey--text">
          Tasks:&nbsp;
          <v-fade-transition leave-absolute>
            <span :key="`tasks-${tasks.length}`">
              {{ tasks.length }}
            </span>
          </v-fade-transition>
        </h2>
        <v-row class="my-1" align="center">
          <strong class="mx-4 pink--text text--lighteen-2 font-weight-light">
            Remaining: {{ remainingTasks }}
          </strong>

          <v-divider vertical></v-divider>

          <strong class="mx-4 grey--text text--lighteen-4 font-weight-light">
            Completed: {{ completedTasks }}
          </strong>

          <v-spacer></v-spacer>

          <v-progress-circular
            color="pink"
            :value="progress"
            class="mr-2"
          ></v-progress-circular>
        </v-row>
      </div>

      <div class="pb-8">
        <v-toolbar flat color="transparent">
          <v-btn icon>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-text-field
            v-model="search"
            color="pink"
            append-icon="mdi-magnify"
            label="Search Tasks"
            single-line
          ></v-text-field>
        </v-toolbar>

        <v-layout row class="mt-4 mb-8">
          <v-tooltip
            bottom
            v-for="sortOption in sortingOptions"
            :key="sortOption.key"
          >
            <template v-slot:activator="{ on: tooltip }">
              <v-btn
                small
                plain
                color="grey"
                class="px-12"
                @click="sortBy(sortOption.key)"
                slot="activator"
                v-on="tooltip"
              >
                <v-icon left small> {{ sortOption.icon }}</v-icon>
                <span class="caption text-lowercase">{{
                  sortOption.title
                }}</span>
              </v-btn>
            </template>
            <span>{{ sortOption.toolTipText }}</span>
          </v-tooltip>
        </v-layout>
        <div class="mt-12"><TaskAddPopup /> <CategorieAddPopup /></div>

        <TaskCard
          v-for="task in filteredTasks"
          :key="task.id"
          :task="task"
          :projects="projects.map((e) => e.name)"
          @task-edited="editTask"
          @task-deleted="delTask"
        />
      </div>
      <div v-show="createMode">
        <h2 class="grey--text font-weight-light mx-2 my-4">
          Create a new task
        </h2>
        <TaskForm
          :projects="projects.map((e) => e.name)"
          @task-added="
            (task) => {
              addTask(task);
            }
          "
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import ProjectApi from "@/projectApi";
import TaskApi from "@/taskApi";
import TaskCard from "@/components/TaskCard.vue";
import TaskForm from "@/components/TaskForm.vue";
import TaskAddPopup from "@/components/TaskAdditionPopup.vue";
import CategorieAddPopup from "@/components/CategorieAdditionPopup.vue";

export default {
  name: "HomePage",
  components: {
    TaskCard,
    TaskForm,
    TaskAddPopup,
    CategorieAddPopup,
  },
  data() {
    return {
      projects: [],
      tasks: [],
      search: "",
      createMode: false,
      editMode: false,
      sortingOptions: [
        {
          key: "title",
          title: "by title",
          icon: "mdi-book",
          toolTipText: "Sort tasks by their title",
        },
        {
          key: "project",
          title: "by categorie",
          icon: "mdi-folder",
          toolTipText: "Sort tasks by their categorie",
        },
        {
          key: "dueTo",
          title: "by date",
          icon: "mdi-calendar",
          toolTipText: "Sort tasks by their date",
        },
      ],
    };
  },
  methods: {
    getProjects() {
      ProjectApi.getProjects((response) => {
        this.projects = response;
      });
    },
    getTasks() {
      TaskApi.getTasks((response) => {
        this.tasks = response;
        this.sortBy();
      });
    },
    delTask(id) {
      TaskApi.delTask(() => {
        this.getTasks();
      }, id);
    },
    addTask(task) {
      TaskApi.addTask(() => {
        this.getTasks();
      }, task);
    },
    editTask(task) {
      TaskApi.editTask(() => {
        this.getTasks();
      }, task);
      // this.scrollToTop();
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    sortBy(key) {
      this.tasks.sort((a, b) => Number(a.isDone) - Number(b.isDone));
      if (key === "dueTo") {
        this.tasks.sort((a, b) =>
          new Date(a[key]) > new Date(b[key]) ? -1 : 1
        );
      } else if (key) {
        this.tasks.sort((a, b) =>
          a[key].toUpperCase() < b[key].toUpperCase() ? -1 : 1
        );
      }
    },
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter((e) =>
        e?.title?.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    completedTasks() {
      return this.tasks.filter((task) => task.isDone).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    },
  },
  created() {
    this.getProjects();
    this.getTasks();
  },
};
</script>
