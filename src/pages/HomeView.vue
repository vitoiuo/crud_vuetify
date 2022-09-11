<template>
  <div class="home py-4 px-2">
    <h1 class="grey--text font-weight-light">Dashboard</h1>
    <v-container class="my-8">
      <v-btn fab dark color="pink" class="mb-8"
        ><v-icon>mdi-plus</v-icon></v-btn
      >
      <v-toolbar flat color="transparent" class="">
        <v-btn icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search News"
          single-line
        ></v-text-field>
      </v-toolbar>

      <v-layout row class="my-4">
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
              <span class="caption text-lowercase">{{ sortOption.title }}</span>
            </v-btn>
          </template>
          <span>{{ sortOption.toolTipText }}</span>
        </v-tooltip>
      </v-layout>

      <TaskCard v-for="task in filteredTasks" :key="task.id" :task="task" />
    </v-container>
  </div>
</template>

<script>
import ProjectApi from "@/projectApi"
import TaskApi from "@/taskApi"
import TaskCard from "@/components/TaskCard.vue"

export default {
  components: {
    TaskCard,
  },
  data() {
    return {
      projects: [],
      tasks: [],
      search: "",
      sortingOptions: [
        {
          key: "title",
          title: "by title",
          icon: "mdi-file-word",
          toolTipText: "Sort tasks by their title",
        },
        {
          key: "project",
          title: "by categorie",
          icon: "mdi-folder",
          toolTipText: "Sort tasks by their categorie",
        },
      ],
    }
  },
  methods: {
    getProjects() {
      ProjectApi.getProjects((response) => {
        this.projects = response
      })
    },
    getTasks() {
      TaskApi.getTasks((response) => {
        this.tasks = response
      })
    },
    sortBy(key) {
      this.tasks.sort((a, b) =>
        a[key].toUpperCase() < b[key].toUpperCase() ? -1 : 1
      )
    },
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter((e) =>
        e?.title?.toLowerCase().includes(this.search.toLowerCase())
      )
    },
  },
  created() {
    this.getProjects()
    this.getTasks()
  },
}
</script>
