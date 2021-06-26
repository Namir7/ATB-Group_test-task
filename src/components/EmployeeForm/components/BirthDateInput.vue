<template>
  <div class="col-span-2 lg:col-span-1">
    <input
      v-model="value"
      placeholder="1980-07-15"
      id="birthDate"
      type="text"
      tabindex="2"
      class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
      :class="isValid ? '' : 'border-2 border-red-700'"
    />
  </div>
</template>

<script>
export default {
  props: ["modelValue", "isValid"],
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
