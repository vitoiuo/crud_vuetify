<template>
  <v-form max-width="1024" ref="form" v-model="valid" lazy-validation>
    <v-col cols="12" sm="6" md="4">
      <v-text-field
        :value="task?.title"
        @input="taskInput.title = $event"
        :counter="24"
        :rules="nameRules"
        @blur="validate"
        label="Title"
        required
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-select
        :value="task?.project"
        @input="taskInput.project = $event"
        :items="projects"
        label="Categorie"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="taskInput.dueTo"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            :value="taskInput.dueTo ? taskInput.dueTo : task?.dueTo"
            label="Pick a date"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker @input="taskInput.dueTo = $event" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(taskInput.dueTo)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-checkbox
        @click="taskInput.isDone = !taskInput.isDone"
        label="Done"
      ></v-checkbox>
    </v-col>
    <v-btn
      :disabled="!valid"
      color="pink white--text"
      class="mr-4"
      @click="
        task ? $emit('task-edited', taskInput) : $emit('task-added', taskInput)
      "
    >
      {{ buttonText }}
    </v-btn>

    <v-btn plain class="mr-4 pink--text" @click="reset"> Reset Form </v-btn>
  </v-form>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
    },
    projects: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    menu: null,
    valid: true,
    taskInput: {
      id: null,
      title: null,
      project: null,
      dueTo: null,
      isDone: null,
    },
    nameRules: [
      (v) => !!v || "Title is required",
      (v) => (v && v.length <= 24) || "Title must be less than 24 characters",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
  },
  computed: {
    buttonText() {
      if (!this.task) {
        return "save task"
      }
      return "edit task"
    },
  },
  created() {
    if (this.task) {
      this.taskInput = { ...this.task }
    }
  },
}
</script>
