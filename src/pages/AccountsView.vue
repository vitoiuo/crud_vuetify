<template>
  <div class="accounts pa-4">
    <h1 class="grey--text font-weight-light">Accounts</h1>
    <v-container class="my-8">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 xl2 v-for="user in users" :key="user.name">
          <v-card
            flat
            color="#edede9"
            class="text-center ma-4 py-4"
            max-width="280"
          >
            <v-responsive class="pa-4">
              <v-avatar size="100">
                <img :src="user.image" alt="user image" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="title font-weight-bold">
                {{ user.name }}
              </div>
              <div>{{ user.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn plain class="caption"
                ><v-icon left> mdi-pencil </v-icon> <span>Edit</span></v-btn
              >
              <v-btn plain class="caption"
                ><v-icon left> mdi-delete </v-icon> <span>Delete</span></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AccountsView",
  data() {
    return {
      users: [
        {
          image:
            "https://i1.sndcdn.com/avatars-5YhOoeqkl8R1QTtE-VPEy0Q-t500x500.jpg",
          name: "The Net Ninja",
          role: "Web developer",
        },
        {
          image:
            "https://i1.sndcdn.com/avatars-5YhOoeqkl8R1QTtE-VPEy0Q-t500x500.jpg",
          name: "Ryu",
          role: "Graphic designer",
        },
        {
          image:
            "https://i1.sndcdn.com/avatars-5YhOoeqkl8R1QTtE-VPEy0Q-t500x500.jpg",
          name: "Chun Li",
          role: "Web developer",
        },
        {
          image:
            "https://i1.sndcdn.com/avatars-5YhOoeqkl8R1QTtE-VPEy0Q-t500x500.jpg",
          name: "Gouken",
          role: "Social media maverick",
        },
        {
          image:
            "https://i1.sndcdn.com/avatars-5YhOoeqkl8R1QTtE-VPEy0Q-t500x500.jpg",
          name: "Yoshi",
          role: "Sales guru",
        },
      ],
    }
  },
}
</script>
