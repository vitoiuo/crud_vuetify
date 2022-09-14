<template>
  <v-card elevation="16" max-width="400" class="mx-auto my-md-12">
    <v-virtual-scroll :items="projects" height="412" item-height="64">
      <template v-slot:default="{ item }">
        <v-list-item :key="item.id">
          <v-list-item-action>
            <v-btn fab small depressed color="pink white--text">
              {{ item.id }}
            </v-btn>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              <strong>{{ item.name }}</strong>
            </v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon small> mdi-open-in-new </v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-divider></v-divider>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>
