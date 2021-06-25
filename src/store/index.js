import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

// initial data
import employees from "../data/employees";

const store = {
  state: {
    employees,
  },

  getters: {
    getEmployeeByID: (state, getters) => (id) => {
      const index = getters.getIndexByID(id);

      if (index === -1) return null;
      return state.employees[index];
    },

    getIndexByID: (state) => (id) => {
      const index = state.employees.findIndex((employee) => employee.id === id);

      return index;
    },
  },

  mutations: {
    add(state, { employee }) {
      state.employees.push(employee);
    },
    delete(state, { index }) {
      state.employees.splice(index, 1);
    },
    edit(state, { editedEmployee, index }) {
      state.employees[index] = editedEmployee;
    },
  },

  actions: {
    addEmployee({ commit }, { employee }) {
      commit("add", { employee });
    },

    deleteEmployee({ commit, getters }, { id }) {
      const index = getters.getIndexByID(id);

      console.log(index);

      commit("delete", { index });
    },

    editEmployee({ commit, getters }, { editedEmployee }) {
      const index = getters.getIndexByID(editedEmployee.id);

      console.log(index);

      commit("edit", { editedEmployee, index });
    },
  },

  plugins: [
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) =>
        Cookies.set(key, state, { expires: 3, secure: true }),
    }),
  ],
};

export default createStore(store);
