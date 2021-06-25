<template>
  <div class="form-control">
    <label for="description">Additioanl info:</label>
    <textarea
      v-model="value"
      id="description"
      :maxlength="descriptionMaxLenght"
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

<style lang="scss" scoped>
input {
  width: 150px;
}
.form-control {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 25px;
}
</style>
