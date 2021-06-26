<template>
  <button
    class="
      p-1
      transform
      hover:rotate-45
      transition-transform
      duration-300
      absolute
      top-0
      right-1
    "
    v-if="!isEditMode"
    @click="$emit('clear')"
  >
    <img class="w-5 h-5" src="../../../assets/reload.svg" alt="reload" />
  </button>
</template>

<script>
export default {
  name: "ReloadBtn",
  emits: ["clear"],
  props: ["isEditMode"],
};
</script>
