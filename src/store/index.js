import { createStore } from "vuex";
import jsonData from "@/assets/data.json";

const state = {
  data: jsonData,
  filteredJobs: jsonData,
  darkTheme: false,
  currentOffer: [],
};

/* MUTATIONS */

const mutations = {
  TOGGLE_THEME: (state) => {
    state.darkTheme = !state.darkTheme;
  },
  SET_FILTERED_JOBS: (state, value) => {
    state.filteredJobs = value;
  },
  SET_CURRENT_OFFER: (state, offer) => {
    state.currentOffer = offer;
  },
};

/* ACTIONS */

const actions = {
  filterByTitle: (context, { jobQuery, checked }) => {
    const filteredJobs = state.data.filter((job) => {
      const jobFields = [job.company, job.position, job.contract];
      return jobFields.some(
        (field) =>
          field.toLowerCase().includes(jobQuery.toLowerCase()) &&
          (checked ? job.contract === "Full Time" : true)
      );
    });
    context.commit("SET_FILTERED_JOBS", filteredJobs);
  },
  filterByLocation: (context, { locationQuery, checked }) => {
    const filteredJobs = context.state.data.filter(
      (job) =>
        job.location.toLowerCase().includes(locationQuery.toLowerCase()) &&
        (checked ? job.contract === "Full Time" : true)
    );
    context.commit("SET_FILTERED_JOBS", filteredJobs);
  },
};

const store = createStore({
  state,
  mutations,
  actions,
});

export default store;
