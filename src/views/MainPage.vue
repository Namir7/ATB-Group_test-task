<template>
  <main class="pt-10">
    <div class="container mx-auto">
      <h1 class="hidden">Employees management main page</h1>
      <h2 class="text-3xl mb-6 text-center">Employees</h2>
      <EmployeesTable />
      <CancelDelete />
    </div>
  </main>
</template>

<script>
import EmployeesTable from "../components/EmployeesTable/EmployeesTable.vue";
import CancelDelete from "../components/CancelDelete.vue";

export default {
  components: { EmployeesTable, CancelDelete },
};
</script>

<style lang="scss" scoped></style>
