<template>
  <h1 class="hidden">Create employee page</h1>
  <h2>Create emplyee</h2>
  <form @submit.prevent="create">
    <div class="form-control">
      <label for="firstName">Name: </label>
      <input v-model="employee.firstName" id="firstName" type="text" />
    </div>
    <div class="form-control">
      <label for="lastName">Last name:</label>
      <input v-model="employee.lastName" id="lastName" type="text" />
    </div>
    <div class="form-control">
      <label for="middleName">middle name:</label>
      <input v-model="employee.middleName" id="middleName" type="text" />
    </div>
    <div class="form-control">
      <label for="birthDate">Birthday:</label>
      <input v-model="employee.birthDate" id="birthDate" type="date" />
    </div>
    <div class="form-control">
      <label for="description">Additioanl info:</label>
      <textarea v-model="employee.description" id="description" />
    </div>

    <input type="submit" value="Send" />
  </form>
</template>

<script>
export default {
  name: "Create",
  inject: ["uuidv4"],
  data() {
    return {
      employee: {
        id: this.uuidv4(),
        lastName: "",
        firstName: "",
        middleName: "",
        birthDate: "",
        description: "",
      },
    };
  },
  methods: {
    create() {
      console.log("add method");
      // this.addEmployee(this.employee);
    },
  },
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}

h2 {
  width: fit-content;
  margin: 0 auto 30px auto;
}

form {
  width: fit-content;
  margin: 0 auto;

  .form-control {
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin-bottom: 25px;
  }

  input,
  textarea {
    width: 150px;
  }

  input[type="submit"] {
    display: block;
    margin: 0 auto;
  }
}
</style>
