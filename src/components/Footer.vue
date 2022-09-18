<template>
  <footer>
    <v-footer padless color="pink">
      <v-card flat tile class="pink white--text text-center mx-auto">
        <v-card-text>
          <v-btn
            v-for="media in medias"
            :key="media.link"
            class="mx-4 white--text"
            icon
            :href="media.link"
            target="_blank"
          >
            <v-icon size="24px">
              {{ media.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text width="100%" class="white--text pt-0">
          Join millions of people who organize work and life with Todoist.
        </v-card-text>

        <v-divider color="white"></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Designed by Vito</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </footer>
</template>

<script>
export default {
  name: "FooterArea",
  data: () => ({
    medias: [
      {
        icon: "mdi-github",
        link: "https://github.com/vitoiuo",
      },
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/Vitoiuoo",
      },
      {
        icon: "mdi-slack",
        link: "",
      },
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/victor-magalh%C3%A3es-barreto-ti/",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/vitoiuo/",
      },
    ],
  }),
};
</script>
