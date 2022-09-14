<template>
  <div class="registration py-4 px-2">
    <h1 class="grey--text font-weight-light">Register now</h1>
    <UserForm />
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
export default {
  name: "UserRegistration",
  components: {
    UserForm,
  },
};
</script>
