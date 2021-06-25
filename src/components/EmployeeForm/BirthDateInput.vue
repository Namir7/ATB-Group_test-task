<template>
  <div class="form-control">
    <label for="birthDate">Birthday:</label>
    <input
      v-model="value"
      id="birthDate"
      type="text"
      :class="{ irrelevant: value !== '' && !$props.isValid }"
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

<style lang="scss" scoped>
input {
  width: 150px;

  &.irrelevant {
    background-color: pink;
  }
}
.form-control {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 25px;
}
</style>
