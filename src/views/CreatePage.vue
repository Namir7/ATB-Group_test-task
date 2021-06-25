<template>
  <h1 class="hidden">Create employee page</h1>
  <h2>Create emplyee</h2>
  <EmployeeForm />
</template>

<script>
import EmployeeForm from "../components/EmployeeForm/EmployeeForm.vue";

export default {
  components: { EmployeeForm },
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}

h2 {
  width: fit-content;
  margin: 0 auto 30px auto;
}
</style>
