<template>
  <div class="home">
    <TaskCard />
    <v-btn class="hidden-sm-only">click him</v-btn>
  </div>
</template>

<script>
import ProjectApi from "@/projectApi";
import TaskApi from "@/taskApi";
import TaskCard from "@/components/TaskCard.vue";

export default {
  components: {
    TaskCard,
  },
  data() {
    return {
      projects: [],
      tasks: [],
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
      });
    },
  },
  created() {
    this.getProjects();
    this.getTasks();
  },
};
</script>
