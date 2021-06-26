<template>
  <div class="col-span-2">
    <textarea
      v-model="value"
      id="description"
      cols="30"
      rows="8"
      placeholder="description"
      tabindex="3"
      :maxlength="descriptionMaxLenght"
      class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
    />
  </div>
</template>

<script>
export default {
  props: ["modelValue", "descriptionMaxLenght"],
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
