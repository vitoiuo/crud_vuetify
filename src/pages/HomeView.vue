<template>
  <div class="home pa-4">
    <h1 class="subheading grey--text">Todo</h1>
    <v-container class="my-8">
      <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
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
  },
  created() {
    this.getProjects()
    this.getTasks()
  },
}
</script>
