import { createStore } from "vuex";

// initial data
import employees from "../data/employees";

const store = {
  state: {
    employees,
  },
  mutations: {
    add(state, payload) {
      state.employees.push(payload.employee);
    },
    delete(state, payload) {
      console.log(state);
      console.log(payload);
    },
    edit(state, payload) {
      console.log(state);
      console.log(payload);
    },
  },
};

export default createStore(store);
