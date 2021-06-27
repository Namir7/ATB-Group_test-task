import { computed } from "vue";

export default function convertFormDataToEmployee(
  id,
  fullName,
  birthDate,
  description
) {
  const employee = computed(() => {
    const firstName = getFirstName(fullName.value);
    const lastName = getLastName(fullName.value);
    const middleName = getMiddleName(fullName.value);

    return {
      id: id.value,
      firstName,
      lastName,
      middleName,
      birthDate: birthDate.value,
      description: description.value === "" ? null : description.value,
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
