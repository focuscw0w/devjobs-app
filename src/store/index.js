import { createStore } from "vuex";
import jsonData from "@/assets/data.json"

const store = createStore({
  state: {
    data: jsonData,
    filteredJobs: jsonData,
    darkTheme: false,
  },
  getters: {},
  mutations: {
    TOGGLE_THEME: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
  actions: {
  },
  modules: {},
});

export default store;
