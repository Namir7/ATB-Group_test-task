<template>
  <input
    type="submit"
    :tabindex="tabIndex"
    :value="isEditMode ? 'edit' : 'create'"
    :disabled="!isFormValid"
    class="
      py-3
      px-6
      bg-green-500
      disabled:bg-gray-500
      text-white
      font-bold
      w-full
      sm:w-32
      cursor-pointer
      opacity-80
      disabled:opacity-100
      hover:opacity-100
    "
  />
</template>

<script>
export default {
  name: "SubmitBtn",
  props: ["isEditMode", "isFormValid", "tabIndex"],
};
</script>
