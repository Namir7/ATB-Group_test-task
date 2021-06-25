<template>
  <div>
    <router-link class="add" to="/create">Add</router-link>
    <table>
      <tr>
        <th>last name</th>
        <th>name</th>
        <th>middle name</th>
        <th>birth date</th>
        <th>description</th>
        <th>actions</th>
      </tr>
      <EmployeeRow
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
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

  mounted() {
    // const hasSavedNewEmployeeData = localStorage.getItem("employees");
    // if (hasSavedNewEmployeeData) this.saveToLocalStorage();
  },
  updated() {
    // this.retrieveFromLocalStorage();
  },

  computed: {
    ...mapState(["employees"]),
  },
  methods: {
    saveToLocalStorage() {
      // const parsed = JSON.stringify(this.employees);
      // localStorage.setItem("employees", parsed);
    },

    retrieveFromLocalStorage() {
      // const stringified = localStorage.getItem("employees");
      // const employees = JSON.parse(stringified);
      // this.id = newEmployee.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.add {
  display: block;
  width: 50px;
  height: 20px;
  margin-left: auto;
  margin-bottom: 25px;
  padding: 5px;

  background: rgb(133, 133, 133);
  border-color: rgb(133, 133, 133);
  border-radius: 4px;

  text-align: center;
  color: black;
  text-decoration: none;
}

table {
  width: 100%;
  border: 2px double black;

  & th {
    text-align: center;
    background: #ccc;
    padding: 5px;
    border: 1px solid black;
  }
  & td {
    padding: 5px;
    border: 1px solid black;
  }
}
</style>
