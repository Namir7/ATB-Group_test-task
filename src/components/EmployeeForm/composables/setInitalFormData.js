import { computed, reactive } from "vue";

import { v4 as uuidv4 } from "uuid";

export default function setInitalFormData(store, route, isEditMode) {
  let initialFormData = {
    id: uuidv4(),
    fullName: "",
    birthDate: "",
    description: "",
  };

  if (isEditMode) {
    const id = route.params.id;
    const employee = computed(() => store.getters.getEmployeeByID(id));

    const fullName = `${employee.value.lastName} ${employee.value.firstName}${
      employee.value.middleName ? ` ${employee.value.middleName}` : ""
    }`;

    const birthDate = employee.value.birthDate;
    const description = employee.value.description
      ? employee.value.description
      : "";

    initialFormData = { id, fullName, birthDate, description };
  }

  return {
    formData: reactive(initialFormData),
  };
}
