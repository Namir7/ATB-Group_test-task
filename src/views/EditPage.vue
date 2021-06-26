<template>
  <main class="pt-10">
    <div class="container mx-auto">
      <h1 class="hidden">Edit employee page</h1>
      <h2 class="text-3xl mb-6 text-center">Edit employee</h2>
      <EmployeeForm :isEditMode="true" @goToMainPage="goToMainPage" />
    </div>
  </main>
</template>

<script>
import EmployeeForm from "../components/EmployeeForm/EmployeeForm.vue";

export default {
  components: { EmployeeForm },
  created() {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", this.handleKeyPress);
    }
  },
  beforeUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("keydown", this.handleKeyPress);
    }
  },
  methods: {
    handleKeyPress(e) {
      if (e.key === "Escape") {
        this.goToMainPage();
      }
    },
    goToMainPage() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
