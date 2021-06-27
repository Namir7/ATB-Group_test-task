import { onMounted, onUpdated } from "vue";


export default function useLocalStorage(isEditMode, formData) {
  onMounted(() => {
    const hasSavedNewEmployeeData = localStorage.getItem("newEmployeeData");

    if (!isEditMode && hasSavedNewEmployeeData)

      retrieveNewEmployeeDataFromLocalStorage();
  });

  onUpdated(() => {

    if (!isEditMode) saveNewEmployeeDataInLocalStorage();

  });

  function saveNewEmployeeDataInLocalStorage() {
    const newEmployeeData = {

      id: formData.id,
      fullName: formData.fullName,
      birthDate: formData.birthDate,
      description: formData.description,

    };

    const parsed = JSON.stringify(newEmployeeData);

    localStorage.setItem("newEmployeeData", parsed);
  }

  function retrieveNewEmployeeDataFromLocalStorage() {
    const stringified = localStorage.getItem("newEmployeeData");
    const newEmployee = JSON.parse(stringified);

    formData.id = newEmployee.id;
    formData.fullName = newEmployee.fullName;
    formData.birthDate = newEmployee.birthDate;
    formData.description = newEmployee.description;

  }
}
