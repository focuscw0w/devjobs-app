<template>
  <form class="search-form">
    <div class="flex-container">
      <div class="search-form__item" id="title">
        <img
          src="@/assets/images/desktop/icon-search.svg"
          alt="search by title"
        />
        <input
          type="text"
          placeholder="Filter by title, companies, expertise..."
          class="search-input"
          v-model="jobQuery"
        />
      </div>
      <div class="search-form__item" id="location">
        <img
          src="@/assets/images/desktop/icon-location.svg"
          alt="search by location"
        />
        <input
          type="text"
          placeholder="Filter by location..."
          class="search-input"
          v-model="locationQuery"
        />
      </div>
      <div class="search-form__item" id="search">
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">Full Time Only</label>
        <button type="submit" class="search-form__btn" @click="searchJob()">
          Search
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import store from "@/store/index.js";
export default {
  setup() {
    const state = reactive({
      checked: false,
      locationQuery: "",
      jobQuery: "",
    });

    const searchJob = () => {
      if (state.jobQuery == "" && state.locationQuery == "") return;
      if (state.jobQuery !== "" && state.locationQuery !== "") return;

      if (state.jobQuery !== "") filterByTitle();
      else filterByLocation();

      resetSettings();
    };

    // Reset settings

    const resetSettings = () => {
      state.locationQuery = "";
      state.jobQuery = "";
      state.checked = false;
    };

    //
    /// All filters
    //

    // Refactor with vuex

    const filterByTitle = () => {
      store.state.filteredJobs = store.state.data.filter(
        (job) =>
          job.company
            .toLowerCase()
            .includes(state.jobQuery.toLocaleLowerCase()) ||
          job.position
            .toLowerCase()
            .includes(state.jobQuery.toLocaleLowerCase()) ||
          job.contract
            .toLowerCase()
            .includes(state.jobQuery.toLocaleLowerCase())
      );
    };

    const filterByLocation = () => {
      store.state.filteredJobs = store.state.data.filter((job) =>
        job.location
          .toLowerCase()
          .includes(state.locationQuery.toLocaleLowerCase())
      );
    };

    return { ...toRefs(state), searchJob };
  },
};
</script>

<style></style>
