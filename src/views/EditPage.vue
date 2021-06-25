<template>
  <h1 class="hidden">Edit employee page</h1>
  <h2>Edit emplyee</h2>
  <EmployeeForm :isEditMode="true" />
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
