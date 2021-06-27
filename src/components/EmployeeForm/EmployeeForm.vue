<template>
  <form @submit.prevent="formHandler" @keypress.enter.prevent="formHandler">
    <div class="grid grid-cols-2 gap-4 max-w-xl m-auto pt-10 relative">
      <ReloadBtn tabindex="-1" :isEditMode="isEditMode" @clear="clear" />

      <NameInput v-model="fullName" :isValid="isNameValid" />

      <BirthDateInput v-model="birthDate" :isValid="isBirthDateValid" />

      <DescriptionInput
        v-model="description"
        :descriptionMaxLenght="descriptionMaxLenght"
      />

      <div class="col-span-2 text-center flex">
        <CancelBtn />
        <SubmitBtn
          tabindex="4"
          :isEditMode="isEditMode"
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

import { toRef } from "vue";
import { mapActions } from "vuex";

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
  props: ["isEditMode"],

  setup(props) {
    const isEditMode = toRef(props, "isEditMode");

    const { id, fullName, birthDate, description } =
      setInitalFormData(isEditMode);

    const { isNameValid, isBirthDateValid, isFormValid } = useValidation(
      fullName,
      birthDate
    );

    useLocalStorage(isEditMode, id, fullName, birthDate, description);

    const { employee } = convertFormDataToEmployee(
      id,
      fullName,
      birthDate,
      description
    );

    return {
      id,
      fullName,
      birthDate,
      description,

      isNameValid,
      isBirthDateValid,
      isFormValid,

      employee,
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

      if (this.$props.isEditMode) {
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
