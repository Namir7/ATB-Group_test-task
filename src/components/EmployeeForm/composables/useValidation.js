import { computed } from "vue";

export default function useValidation(formData) {
  const isNameValid = computed(() => checkIfNameInputValid(formData.fullName));

  const isBirthDateValid = computed(() =>
    checkIfBirthDateInputValid(formData.birthDate)
  );

  const isRequiredInputsEmpty = computed(() => {
    return formData.fullName.length === 0 || formData.birthDate.length === 0;
  });

  const isFormValid = computed(() => {
    const isInputsValid = isNameValid.value && isBirthDateValid.value;

    return !isRequiredInputsEmpty.value && isInputsValid;
  });

  function checkIfNameInputValid(value) {
    if (value.length === 0) return true;
    const regex =
      /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;

    return regex.test(value);
  }

  function checkIfBirthDateInputValid(value) {
    if (value.length === 0) return true;

    const year = parseInt(value);
    if (year < 1900) return false;

    const regex = /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/;
    return regex.test(value);
  }

  return {
    isNameValid,
    isBirthDateValid,
    isFormValid,
  };
}
