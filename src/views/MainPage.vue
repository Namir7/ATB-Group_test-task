<template>
  <div class="home">
    <h1 class="hidden">Employees management main page</h1>
    <h2 class="w-min my-10 mx-auto">Employees</h2>
    <EmployeesTable />
  </div>
</template>

<script>
import EmployeesTable from "../components/EmployeesTable.vue";

export default {
  components: { EmployeesTable },
};
</script>

<style lang="scss" scoped></style>
