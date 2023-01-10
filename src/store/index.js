import { createStore } from 'vuex'
import axios from "axios"

const store = createStore({
  state: {
    jobs: [],
  },
  getters: {
  },
  mutations: {
    SET_JOBS: (state, jobs) => {
      state.jobs = jobs
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store

/*
const setJobsToStore = () => {
  axios
  .get("/public/data.json")
  .then(response => {
    store.commit("SET_JOBS", response.data)
  })
}

setJobsToStore()

*/