<template>
  <form @submit.prevent="formCallback">
    <button class="reload" v-if="!isEditMode" @click="clear">
      <img class="reload-img" src="../../assets/reload.svg" alt="reload" />
    </button>
    <NameInput v-model="fullName" :isValid="isNameValid" />
    <BirthDateInput v-model="birthDate" :isValid="isBirthDateValid" />
    <DescriptionInput
      v-model="description"
      :descriptionMaxLenght="descriptionMaxLenght"
    />
    <router-link class="cancel" to="/">Cancel</router-link>
    <input
      type="submit"
      :value="$props.isEditMode ? 'edit' : 'create'"
      :disabled="!isFormValid"
    />
  </form>
</template>

<script>
import NameInput from "./NameInput.vue";
import BirthDateInput from "./BirthDateInput.vue";
import DescriptionInput from "./DescriptionInput.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "EmployeeForm",
  components: { NameInput, BirthDateInput, DescriptionInput },
  props: ["isEditMode"],
  inject: ["uuidv4"],

  created() {
    if (!this.isEditMode) return;

    const id = this.$route.params.id;
    const employee = this.getEmployeeByID(id);

    this.id = id;
    this.fullName = `${employee.lastName} ${employee.firstName} ${
      employee.middleName ? employee.middleName : ""
    }`;
    this.birthDate = employee.birthDate;
    this.description = employee.description;
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
      id: this.uuidv4(),

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
        description: this.description,
      };
    },

    isNameValid() {
      return this.checkIfNameInputValid(this.fullName);
    },

    isBirthDateValid() {
      return this.checkIfBirthDateInputValid(this.birthDate);
    },

    isFormValid() {
      return this.isNameValid && this.isBirthDateValid;
    },

    ...mapGetters(["getEmployeeByID"]),
  },

  methods: {
    formCallback() {
      if (this.$props.isEditMode) {
        this.editEmployee({ editedEmployee: this.employee });
        this.goToMainPage();
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

    goToMainPage() {
      this.$router.push("/");
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
      const regex =
        /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;

      return regex.test(value.trim());
    },

    checkIfBirthDateInputValid(value) {
      const regex = /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/;
      return regex.test(value);
    },

    checkIfDescriptionInputValid(value) {
      console.log(value);
    },

    ...mapActions(["addEmployee", "editEmployee"]),
  },
};
</script>

<style lang="scss" scoped>
form {
  width: fit-content;
  margin: 0 auto;
  .reload {
    background-color: white;
    border: none;

    &-img {
      display: block;

      width: 25px;
      height: 25px;
    }
  }

  input[type="submit"] {
    display: block;
    margin: 0 auto;
  }

  .cancel {
    display: block;
    width: 50px;
    height: 30px;

    background-color: red;

    color: white;
    text-decoration: none;
  }
}
</style>
