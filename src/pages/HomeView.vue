<template>
  <div class="home pa-4">
    <h1 class="grey--text font-weight-light">Dashboard</h1>
    <v-container class="my-8">
      <v-btn fab dark color="pink" class="mb-8"
        ><v-icon>mdi-plus</v-icon></v-btn
      >
      <v-toolbar flat color="transparent" class="my-4">
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
        <v-btn small plain color="grey" @click="sortBy('title')">
          <v-icon left small> mdi-file-word</v-icon>
          <span class="caption text-lowercase">By title</span>
        </v-btn>
        <v-btn small plain color="grey" @click="sortBy('project')">
          <v-icon left small> mdi-folder</v-icon>
          <span class="caption text-lowercase">By categorie</span>
        </v-btn>
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
      this.tasks.sort((a, b) => (a[key] < b[key] ? -1 : 1))
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
