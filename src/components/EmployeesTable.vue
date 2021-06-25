<template>
  <div>
    <router-link class="block w-min ml-auto mb-5" to="/create">Add</router-link>
    <table class="table-auto">
      <tr class="bg-gray-400 text-white">
        <th>Last name</th>
        <th>Name</th>
        <th>Middle name</th>
        <th>Birth date</th>
        <th class="description">Description</th>
        <th>Actions</th>
      </tr>
      <EmployeeRow
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
        class="bg-gray-100 even:bg-gray-200"
      />
    </table>
  </div>
</template>

<script>
import EmployeeRow from "./EmployeeRow.vue";
import { mapState } from "vuex";

export default {
  name: "EmployeesTable",
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
  @apply font-light whitespace-nowrap px-10 py-5;
}

.description {
  @apply px-20;
}
</style>
