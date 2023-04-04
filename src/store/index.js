import { createStore } from "vuex";
import jsonData from "@/assets/data.json";

const state = {
  data: jsonData,
  filteredJobs: jsonData,
  darkTheme: false,
};

/* MUTATIONS */

const mutations = {
  TOGGLE_THEME: (state) => {
    state.darkTheme = !state.darkTheme;
  },
  SET_FILTERED_JOBS: (state, value) => {
    state.filteredJobs = value
  }
};

/* ACTIONS */

const actions = {
  filterByTitle: ({ state, commit }, jobQuery) => {
    const filteredJobs = state.data.filter((job) => {
      const jobFields = [job.company, job.position, job.contract];
      return jobFields.some((field) =>
        field.toLowerCase().includes(jobQuery.toLowerCase())
      );
    });
    commit("SET_FILTERED_JOBS", filteredJobs);
  },
  filterByLocation: (context, locationQuery) => {
    context.state.filteredJobs = context.state.data.filter((job) =>
      job.location.toLowerCase().includes(locationQuery.toLocaleLowerCase())
    );
  },
};

const store = createStore({
  state,
  mutations,
  actions,
});

export default store;
