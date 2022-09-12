<template>
  <footer>
    <v-footer dark padless>
      <v-card flat tile class="pink lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="media in medias"
            :key="media"
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

        <v-card-text class="white--text pt-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          aliquid unde, facere sit dicta nobis repellat, suscipit officia
          repellendus voluptas quo consequuntur eligendi nesciunt aliquam
          praesentium maxime cum, consequatur molestiae?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
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
