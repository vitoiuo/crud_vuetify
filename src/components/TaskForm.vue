<template>
  <v-form max-width="1024" ref="form" v-model="valid" lazy-validation>
    <v-col cols="12" sm="12" md="8">
      <v-text-field
        :value="task?.title"
        @input="taskInput.title = $event"
        :counter="24"
        :rules="nameRules"
        label="Title"
        hint="Textual description of the task"
        required
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="8">
      <v-select
        :value="task?.project"
        @input="taskInput.project = $event"
        :items="projects"
        label="Categorie"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6" md="8">
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
    <v-col cols="12" sm="6" md="6">
      <v-checkbox
        v-model="taskInput.isDone"
        label="Done"
        color="pink"
      ></v-checkbox>
    </v-col>
    <v-btn
      :disabled="!valid"
      color="pink white--text"
      class="mr-4"
      @click="
        validate();
        valid
          ? task
            ? $emit('task-edited', taskInput)
            : $emit('task-added', taskInput) && reset()
          : console.log('invalid');
      "
    >
      {{ buttonText }}
    </v-btn>
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
      (v) => (v && v.length >= 8) || "Title must be bigger than 8 characters",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  computed: {
    buttonText() {
      if (!this.task) {
        return "save task";
      }
      return "edit task";
    },
  },
  created() {
    if (this.task) {
      this.taskInput = { ...this.task };
    }
  },
};
</script>
