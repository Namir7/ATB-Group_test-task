<template>
  <div class="home">
    <h1 class="hidden">Employees management main page</h1>
    <h2>Employees</h2>
    <EmployeesTable />
  </div>
</template>

<script>
import EmployeesTable from "../components/EmployeesTable.vue";

export default {
  components: { EmployeesTable },
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}

h2 {
  width: fit-content;
  margin: 30px auto;
}
</style>
