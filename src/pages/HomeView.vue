<template>
  <div class="home py-4 text-center">
    <header>
      <div class="py-8">
        <div class="text-h2 black--text font-weight-black pb-2">
          Your organization, our work
        </div>
        <div max-width="64" class="subtitle grey--text">
          Become focused, organized, and calm with Todoist. The world’s #1 task
          manager and to-do list app.
        </div>
      </div>

      <v-img gradient="to top right,#c9184a,#fff" height="300"> </v-img>

      <v-row justify="center"
        ><v-btn
          rounded
          class="white--text pa-8 font-weight-bold mt-16"
          color="pink"
          @click="redirectToDashboard"
        >
          <span>Todo now</span>
        </v-btn>
      </v-row>
    </header>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  methods: {
    redirectToDashboard() {
      this.$router.push("dashboard");
    },
  },
};
</script>
