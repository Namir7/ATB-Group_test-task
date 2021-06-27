<template>
  <router-view v-slot="{ Component }">
    <fade-transition>
      <component :is="Component" />
    </fade-transition>
  </router-view>
</template>

<script>
import FadeTransition from "./components/FadeTransition.vue";

export default {
  components: {
    FadeTransition,
  },
};
</script>

<style lang="scss"></style>
