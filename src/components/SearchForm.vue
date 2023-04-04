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
        <button type="submit" class="search-form__btn" @click="searchJob">
          Search
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const state = reactive({
      checked: false,
      locationQuery: "",
      jobQuery: "",
    });

    const store = useStore();

    const resetSettings = () => {
      state.locationQuery = "";
      state.jobQuery = "";
      state.checked = false;
    };

    const hasJobQuery = () => state.jobQuery.trim() !== "";
    const hasLocationQuery = () => state.locationQuery !== "";
    const isFormValid = () => hasJobQuery() !== hasLocationQuery();

    const searchJob = () => {
      if (!isFormValid()) {
        return;
      }
      state.checked = false;
      const filterAction = hasJobQuery() ? "filterByTitle" : "filterByLocation";
      store.dispatch(
        filterAction,
        state.jobQuery.trim() || state.locationQuery
      );
      resetSettings();
    };

    return {
      ...toRefs(state),
      searchJob,
    };
  },
};
</script>
