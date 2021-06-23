<template>
  <div>
    <router-link class="add" to="/create" :addEmployee="add">Add</router-link>
    <table>
      <tr>
        <th>last name</th>
        <th>name</th>
        <th>middle name</th>
        <th>birth date</th>
        <th>description</th>
        <th>actions</th>
      </tr>
      <Employee
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
      />
    </table>
  </div>
</template>

<script>
import Employee from "./Employee.vue";

// initial data
import employees from "../data/employees";

export default {
  name: "Employees",
  components: {
    Employee,
  },
  data() {
    return {
      employees,
    };
  },

  methods: {
    add(employee) {
      this.employees.push(employee);
    },

    delete(employeeID) {
      console.log(employeeID);
    },

    edit(newEmployeeData) {
      console.log(newEmployeeData);
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
