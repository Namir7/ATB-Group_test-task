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

    deleteEmployee({ commit, getters, dispatch }, { id }) {
      const index = getters.getIndexByID(id);
      const deletedEmployee = getters.getEmployeeByID(id);

      commit("delete", { index });
      commit("setDeleted", { deletedEmployee });

      dispatch("clearDeleted");
    },

    editEmployee({ commit, getters }, { editedEmployee }) {
      const index = getters.getIndexByID(editedEmployee.id);
      commit("edit", { editedEmployee, index });
    },
  },

  modules: {
    recover: {
      state: {
        deleted: {
          employee: null,
        },
        timers: [],
      },

      mutations: {
        setDeleted(state, { deletedEmployee }) {
          state.deleted.employee = deletedEmployee;
        },

        stopTimers(state) {
          for (let timer of state.timers) {
            clearTimeout(timer);
          }

          state.timers = [];
        },

        setTimer(state, { timer }) {
          state.timers.push(timer);
        },
      },

      actions: {
        restoreEmployee({ state, commit }) {
          if (state.deleted.employee === null) return;

          const employee = state.deleted.employee;
          commit("add", { employee });

          commit("setDeleted", { deletedEmployee: null });
        },

        async clearDeleted({ commit }) {
          const timeout = 3000;

          commit("stopTimers");
          const timer = setTimeout(() => {
            commit("setDeleted", { deletedEmployee: null });
          }, timeout);

          commit("setTimer", { timer });
        },
      },
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
