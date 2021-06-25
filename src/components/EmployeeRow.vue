<template>
  <tr>
    <td>{{ employee.lastName }}</td>
    <td>{{ employee.firstName }}</td>
    <td>{{ employee.middleName }}</td>
    <td>{{ employee.birthDate }}</td>
    <td>{{ employee.description }}</td>
    <td>
      <router-link class="edit" :to="`/edit/${employee.id}`">Edit</router-link>
      <button type="button" @click="clickHandler">Delete</button>
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
.edit {
  display: inline-block;

  width: 25px;
  height: fit-content;

  margin-left: 25px;
  margin-right: 25px;
  padding: 15px;
  padding-top: 5px;
  padding-bottom: 5px;

  text-decoration: none;
  color: black;

  background-color: cadetblue;
  border-radius: 15%;
}
</style>
