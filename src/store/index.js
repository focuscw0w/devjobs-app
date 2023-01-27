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
};

/* ACTIONS */

const actions = {
  filterByTitle: (context, jobQuery) => {
    context.state.filteredJobs = context.state.data.filter(
      (job) =>
        job.company.toLowerCase().includes(jobQuery.toLocaleLowerCase()) ||
        job.position.toLowerCase().includes(jobQuery.toLocaleLowerCase()) ||
        job.contract.toLowerCase().includes(jobQuery.toLocaleLowerCase())
    );
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
  actions
});

export default store;
