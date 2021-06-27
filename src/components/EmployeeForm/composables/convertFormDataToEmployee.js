import { computed } from "vue";


export default function convertFormDataToEmployee(formData) {
  const employee = computed(() => {
    const firstName = getFirstName(formData.fullName);
    const lastName = getLastName(formData.fullName);
    const middleName = getMiddleName(formData.fullName);

    return {
      id: formData.id,
      firstName,
      lastName,
      middleName,
      birthDate: formData.birthDate,
      description: formData.description === "" ? null : formData.description,

    };
  });

  function getFirstName(fullName) {
    return fullName.split(" ")[1];
  }

  function getLastName(fullName) {
    return fullName.split(" ")[0];
  }

  function getMiddleName(fullName) {
    const value = fullName.split(" ")[2];
    if (value === "" || value === " " || value === undefined) return null;
    return value;
  }

  return {
    employee,
  };
}
