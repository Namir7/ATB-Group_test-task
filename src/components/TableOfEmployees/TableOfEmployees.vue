<template>
  <router-link
    class="
      block
      w-min
      ml-auto
      mr-3
      mb-5
      text-green-700
      opacity-50
      hover:opacity-100
      duration-200
    "
    to="/create"
    >Add</router-link
  >
  <table class="border-collapse w-full">
    <thead>
      <tr>
        <th>Last name</th>
        <th>Name</th>
        <th>Middle name</th>
        <th>Birth date</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <EmployeeRow
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
      />
    </tbody>
  </table>
</template>

<script>
import EmployeeRow from "./components/EmployeeRow.vue";
import { mapState } from "vuex";

export default {
  name: "TableOfEmployees",
  components: {
    EmployeeRow,
  },

  computed: {
    ...mapState(["employees"]),
  },
};
</script>

<style lang="scss" scoped>
th {
  @apply p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell;
}
</style>
