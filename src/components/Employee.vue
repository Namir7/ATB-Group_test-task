<template>
  <tr>
    <td>{{ employee.lastName }}</td>
    <td>{{ employee.firstName }}</td>
    <td>{{ employee.middleName }}</td>
    <td>{{ employee.birthDate }}</td>
    <td>{{ employee.description }}</td>
    <td>
      <button type="button">Eidt</button>
      <button type="button">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Employee",
  props: ["employee"],
};
</script>

<style lang="scss" scoped></style>
