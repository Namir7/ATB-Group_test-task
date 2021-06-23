<template>
  <div class="home">
    <h1 class="hidden">Employees management main page</h1>
    <h2>Employees</h2>
    <Employees />
  </div>
</template>

<script>
import Employees from "../components/Employees.vue";

export default {
  components: { Employees },
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}

h2 {
  width: fit-content;
  margin: 30px auto;
}
</style>
