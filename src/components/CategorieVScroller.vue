<template>
  <v-dialog hide-overlay v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        large
        class="mt-8 mb-4 pink white--text lighten-1"
        v-on="on"
        v-bind="attrs"
        >show categories</v-btn
      >
    </template>
    <UseDraggable class="absolute" :initialValue="{ x: 0, y: 0 }" v-slot="{}">
      <v-card elevation="16" max-width="400" class="mx-auto my-md-12">
        <v-card-actions>
          <v-btn right fab color="pink" text @click="dialog = false">
            <v-icon color="pink">mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <v-virtual-scroll :items="projects" height="412" item-height="64">
            <template v-slot:default="{ item }">
              <v-list-item :key="item.id">
                <v-list-item-action>
                  <v-btn fab small depressed dark :color="item.color">
                    {{ item.id }}
                  </v-btn>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>
                    <strong>{{ item.name }}</strong>
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-icon @click="$emit('categorie-deleted', item.id)" small>
                    mdi-delete
                  </v-icon>
                </v-list-item-action>
              </v-list-item>

              <v-divider></v-divider>
            </template> </v-virtual-scroll
        ></v-card-text>
        <v-divider></v-divider>
      </v-card>
    </UseDraggable>
  </v-dialog>
</template>

<script>
import { UseDraggable } from "@vueuse/components";
export default {
  components: {
    UseDraggable,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.absolute {
  position: absolute;
  z-index: 2;
}
</style>
