<template>
  <form @submit.prevent="formHandler" @keypress.enter.prevent="formHandler">
    <div class="grid grid-cols-2 gap-4 max-w-xl m-auto pt-10 relative">
      <ReloadBtn tabindex="-1" :isEditMode="$attrs.isEditMode" @clear="clear" />

      <NameInput v-model="formData.fullName" :isValid="isNameValid" />

      <BirthDateInput
        v-model="formData.birthDate"
        :isValid="isBirthDateValid"
      />

      <DescriptionInput
        v-model="formData.description"
        :descriptionMaxLenght="descriptionMaxLenght"
      />

      <div class="col-span-2 text-center flex">
        <CancelBtn />
        <SubmitBtn
          tabindex="4"
          :isEditMode="$attrs.isEditMode"
          :isFormValid="isFormValid"
        />
      </div>
    </div>
  </form>
</template>

<script>
import NameInput from "./components/NameInput.vue";
import BirthDateInput from "./components/BirthDateInput.vue";
import DescriptionInput from "./components/DescriptionInput.vue";
import ReloadBtn from "./components/ReloadBtn.vue";
import CancelBtn from "./components/CancelBtn.vue";
import SubmitBtn from "./components/SubmitBtn.vue";

import setInitalFormData from "./composables/setInitalFormData";
import useValidation from "./composables/useValidation";
import useLocalStorage from "./composables/useLocalStorage";
import convertFormDataToEmployee from "./composables/convertFormDataToEmployee";

import { useStore, mapActions } from "vuex";
import { useRoute } from "vue-router";

export default {
  name: "EmployeeForm",
  components: {
    NameInput,
    BirthDateInput,
    DescriptionInput,
    ReloadBtn,
    CancelBtn,
    SubmitBtn,
  },

  emits: ["goToMainPage"],

  setup(props, { attrs }) {
    const store = useStore();
    const route = useRoute();
    const isEditMode = attrs.isEditMode;

    const { formData } = setInitalFormData(store, route, isEditMode);

    const { employee } = convertFormDataToEmployee(formData);

    const { isNameValid, isBirthDateValid, isFormValid } =
      useValidation(formData);

    useLocalStorage(isEditMode, formData);

    return {
      formData,
      employee,

      isNameValid,
      isBirthDateValid,
      isFormValid,
    };
  },

  data() {
    return {
      descriptionMaxLenght: 100,
    };
  },

  methods: {
    formHandler() {
      if (!this.isFormValid) return;

      if (this.$attrs.isEditMode) {
        this.editEmployee({ editedEmployee: this.employee });
        this.$emit("goToMainPage");
      } else {
        this.addEmployee({ employee: this.employee });
        this.clear();
      }
    },

    clear() {
      this.fullName = "";
      this.birthDate = "";
      this.description = "";

      localStorage.clear();
    },

    ...mapActions(["addEmployee", "editEmployee"]),
  },
};
</script>

<style lang="scss" scoped></style>
