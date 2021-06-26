<template>
  <transition name="fade" mode="out-in">
    <tr
      class="
        bg-white
        lg:hover:bg-gray-100
        flex
        lg:table-row
        flex-row
        lg:flex-row
        flex-wrap
        lg:flex-no-wrap
        mb-10
        lg:mb-0
      "
    >
      <td><span>Last name</span>{{ employee.lastName }}</td>
      <td><span>First name</span>{{ employee.firstName }}</td>
      <td><span>Middle name</span>{{ employee.middleName }}</td>
      <td><span>Birth date </span>{{ employee.birthDate }}</td>
      <td class="description">
        <span>Description</span>{{ employee.description }}
      </td>
      <td>
        <span>Actions</span>
        <ActionsCell :employee="employee" />
      </td>
    </tr>
  </transition>
</template>

<script>
import ActionsCell from "./components/ActionsCell.vue";

export default {
  name: "EmployeeRow",
  components: { ActionsCell },
  props: ["employee"],
};
</script>

<style lang="scss" scoped>
td {
  @apply w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static;

  &.description {
    @apply pt-10 lg:pt-3;
  }
}

span {
  @apply lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
