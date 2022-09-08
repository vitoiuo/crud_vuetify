<template>
  <div class="home">
    <h1>Homepage</h1>
    <TaskCard />
    <v-btn class="hidden-md-and-up">click him</v-btn>
  </div>
</template>

<script>
import TaskCard from "../components/TaskCard.vue";
export default {
  components: {
    TaskCard,
  },
};
</script>
