<template>
  <div class="whitespace-nowrap">
    <router-link
      class="text-blue-400 hover:text-blue-600 underline duration-200"
      :to="`/edit/${employee.id}`"
      >Edit</router-link
    >
    <button
      class="text-blue-400 hover:text-blue-600 underline pl-6 duration-200"
      type="button"
      @click="deleteClickHandler"
    >
      Delete
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["employee"],
  methods: {
    deleteClickHandler() {
      this.deleteEmployee({ id: this.employee.id });
    },
    ...mapActions(["deleteEmployee"]),
  },
};
</script>
