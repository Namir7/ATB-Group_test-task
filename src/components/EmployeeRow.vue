<template>
  <tr>
    <td>{{ employee.lastName }}</td>
    <td>{{ employee.firstName }}</td>
    <td>{{ employee.middleName }}</td>
    <td>{{ employee.birthDate }}</td>
    <td>{{ employee.description }}</td>
    <td>
      <router-link
        class="no-underline mx-10 font-light"
        :to="`/edit/${employee.id}`"
        >Edit</router-link
      >
      <button class="font-light mr-5" type="button" @click="clickHandler">
        Delete
      </button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EmployeeRow",
  props: ["employee"],
  methods: {
    clickHandler() {
      console.log(this.employee.id);
      this.deleteEmployee({ id: this.employee.id });
    },
    ...mapActions(["deleteEmployee"]),
  },
};
</script>

<style lang="scss" scoped>
td {
  @apply font-light text-center py-2;
}
</style>
