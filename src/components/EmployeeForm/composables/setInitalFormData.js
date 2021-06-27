import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { v4 as uuidv4 } from "uuid";

export default function setInitalFormData(isEditMode) {
  const store = useStore();
  const route = useRoute();
  let initialFormData = null;

  if (isEditMode.value) {
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
  } else {
    initialFormData = {
      id: uuidv4(),
      fullName: "",
      birthDate: "",
      description: "",
    };
  }

  return {
    id: ref(initialFormData.id),
    fullName: ref(initialFormData.fullName),
    birthDate: ref(initialFormData.birthDate),
    description: ref(initialFormData.description),
  };
}
