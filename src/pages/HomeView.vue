<template>
  <div class="home py-4 text-center">
    <header class="mb-16">
      <div class="py-8">
        <div class="text-h2 black--text font-weight-black pb-2">
          Your organization, our work
        </div>
        <div max-width="64" class="subtitle grey--text">
          Become focused, organized, and calm with Todoist. The world’s #1 task
          manager and to-do list app.
        </div>
      </div>
      <v-img
        :aspect-ratio="16 / 9"
        src="https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        max-height="512"
      >
      </v-img>

      <v-row justify="center"
        ><v-btn
          rounded
          class="white--text pa-8 font-weight-bold mt-16"
          color="pink"
          :to="{ name: 'login' }"
        >
          <span>Todo now</span>
        </v-btn>
      </v-row>
    </header>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item color="pink  lighten-2" fill-dot right>
        <v-card>
          <v-card-title class="pink lighten-2">
            <v-icon dark size="42" class="mr-4"> mdi-magnify </v-icon>
            <h2 class="text-h4 white--text font-weight-light">Title 1</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="10">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit.
              </v-col>
              <v-col class="hidden-sm-and-down text-right" md="2">
                <v-icon size="64"> mdi-calendar-text </v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="pink lighten-1" fill-dot left small>
        <v-card>
          <v-card-title class="pink lighten-1 justify-end">
            <h2 class="text-h4 mr-4 white--text font-weight-light">Title 2</h2>
            <v-icon dark size="42"> mdi-home-outline </v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="8">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit.
              </v-col>
              <v-col cols="12" md="4">
                Lorem ipsum dolor sit amet, no nam oblique veritus.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="pink lighten-1" fill-dot right>
        <v-card>
          <v-card-title class="pink lighten-1">
            <v-icon class="mr-4" dark size="42"> mdi-email-outline </v-icon>
            <h2 class="text-h4 white--text font-weight-light">Title 3</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col v-for="n in 3" :key="n" cols="12" md="4">
                Lorem ipsum dolor sit amet, no nam oblique veritus no nam
                oblique.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="pink lighten-1" fill-dot left small>
        <v-card>
          <v-card-title class="pink lighten-1 justify-end">
            <h2 class="text-h4 mr-4 white--text font-weight-light">Title 4</h2>
            <v-icon dark size="42"> mdi-account-multiple-outline </v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col class="hidden-sm-and-down" md="2">
                <v-icon size="64"> mdi-server-network </v-icon>
              </v-col>
              <v-col cols="12" md="10">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="pink lighten-1" fill-dot right>
        <v-card>
          <v-card-title class="pink lighten-1">
            <v-icon class="mr-4" dark size="42"> mdi-phone-in-talk </v-icon>
            <h2 class="text-h4 white--text font-weight-light">Title 5</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
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
