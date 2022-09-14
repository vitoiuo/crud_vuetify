<template>
  <div>
    <Navbar />
    <v-main class="mx-8 mb-12 adjust-footer">
      <router-view />
    </v-main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "BaseLayout",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.adjust-footer {
  min-height: calc(100vh - 161px - 48px);
}
</style>
