<template>
  <main class="pt-10">
    <div class="container mx-auto">
      <h1 class="hidden">Employees management main page</h1>
      <h2 class="text-3xl mb-6 text-center">Employees</h2>
      <TableOfEmployees />
      <CancelDeletionPopup />
    </div>
  </main>
</template>

<script>
import TableOfEmployees from "../components/TableOfEmployees/TableOfEmployees.vue";
import CancelDeletionPopup from "../components/CancelDeletionPopup.vue";

export default {
  components: { TableOfEmployees, CancelDeletionPopup },
};
</script>

<style lang="scss" scoped></style>
