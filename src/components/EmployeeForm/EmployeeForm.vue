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

import { mapGetters, mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";

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

  created() {
    if (!this.isEditMode) return;

    const id = this.$route.params.id;
    const employee = this.getEmployeeByID(id);

    this.id = id;
    this.fullName = `${employee.lastName} ${employee.firstName}${
      employee.middleName ? ` ${employee.middleName}` : ""
    }`;
    this.birthDate = employee.birthDate;
    this.description = employee.description ? employee.description : "";
  },

  mounted() {
    const hasSavedNewEmployeeData = localStorage.getItem("newEmployeeData");

    if (!this.isEditMode && hasSavedNewEmployeeData)
      this.retrieveNewEmployeeDataFromLocalStorage();
  },

  updated() {
    if (!this.isEditMode) this.saveNewEmployeeDataInLocalStorage();
  },

  data() {
    return {
      id: uuidv4(),

      fullName: "",
      // format: "lastName firstName [middleName]"
      birthDate: "",
      // format: "year-mounth-day"
      description: "",
      descriptionMaxLenght: 100,
    };
  },

  computed: {
    employee() {
      const firstName = this.getFirstName(this.fullName);
      const lastName = this.getLastName(this.fullName);
      const middleName = this.getMiddleName(this.fullName);

      return {
        id: this.id,
        firstName,
        lastName,
        middleName,
        birthDate: this.birthDate,
        description: this.description === "" ? null : this.description,
      };
    },

    isNameValid() {
      return this.checkIfNameInputValid(this.fullName);
    },

    isBirthDateValid() {
      return this.checkIfBirthDateInputValid(this.birthDate);
    },

    isFormValid() {
      const isInputsValid = this.isNameValid && this.isBirthDateValid;

      return !this.isRequiredInputsEmpty && isInputsValid;
    },

    isRequiredInputsEmpty() {
      return this.fullName.length === 0 || this.birthDate.length === 0;
    },

    ...mapGetters(["getEmployeeByID"]),
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

    getFirstName(fullName) {
      return fullName.split(" ")[1];
    },

    getLastName(fullName) {
      return fullName.split(" ")[0];
    },

    getMiddleName(fullName) {
      const value = fullName.split(" ")[2];
      if (value === "" || value === " " || value === undefined) return null;
      return value;
    },

    saveNewEmployeeDataInLocalStorage() {
      const newEmployeeData = {
        id: this.id,
        fullName: this.fullName,
        birthDate: this.birthDate,
        description: this.description,
      };

      const parsed = JSON.stringify(newEmployeeData);

      localStorage.setItem("newEmployeeData", parsed);
    },

    retrieveNewEmployeeDataFromLocalStorage() {
      const stringified = localStorage.getItem("newEmployeeData");
      const newEmployee = JSON.parse(stringified);

      this.id = newEmployee.id;
      this.fullName = newEmployee.fullName;
      this.birthDate = newEmployee.birthDate;
      this.description = newEmployee.description;
    },

    checkIfNameInputValid(value) {
      if (value.length === 0) return true;
      const regex =
        /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;

      return regex.test(value);
    },

    checkIfBirthDateInputValid(value) {
      if (value.length === 0) return true;

      // check if year is incorrect
      const year = parseInt(value);
      if (year < 1950) return false;

      const regex = /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/;
      return regex.test(value);
    },

    ...mapActions(["addEmployee", "editEmployee"]),
  },
};
</script>

<style lang="scss" scoped></style>
