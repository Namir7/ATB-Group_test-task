import { onMounted, onUpdated } from "vue";

export default function useLocalStorage(
  isEditMode,
  id,
  fullName,
  birthDate,
  description
) {
  onMounted(() => {
    const hasSavedNewEmployeeData = localStorage.getItem("newEmployeeData");

    if (!isEditMode.value && hasSavedNewEmployeeData)
      retrieveNewEmployeeDataFromLocalStorage();
  });

  onUpdated(() => {
    if (!isEditMode.value) saveNewEmployeeDataInLocalStorage();
  });

  function saveNewEmployeeDataInLocalStorage() {
    const newEmployeeData = {
      id: id.value,
      fullName: fullName.value,
      birthDate: birthDate.value,
      description: description.value,
    };

    const parsed = JSON.stringify(newEmployeeData);

    localStorage.setItem("newEmployeeData", parsed);
  }

  function retrieveNewEmployeeDataFromLocalStorage() {
    const stringified = localStorage.getItem("newEmployeeData");
    const newEmployee = JSON.parse(stringified);

    id.value = newEmployee.id;
    fullName.value = newEmployee.fullName;
    birthDate.value = newEmployee.birthDate;
    description.value = newEmployee.description;
  }
}
