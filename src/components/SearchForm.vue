<template>
  <form :class="$store.state.darkTheme ? 'search-form dark' : 'search-form'">
    <div class="flex-container">
      <div class="search-form__item" id="title">
        <img
          src="@/assets/images/desktop/icon-search.svg"
          alt="search by title"
        />
        <input
          type="text"
          :placeholder="
            screenWidth < 915
              ? 'Filter by title...'
              : 'Filter by title, companies, expertise...'
          "
          :class="$store.state.darkTheme ? 'search-input dark' : 'search-input'"
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
          :class="$store.state.darkTheme ? 'search-input dark' : 'search-input'"
          v-model="locationQuery"
        />
      </div>
      <div class="search-form__item" id="search">
        <input type="checkbox" class="mr-0-5" id="checkbox" v-model="checked" />
        <label
          for="checkbox"
          :class="$store.state.darkTheme ? 'label-dark' : ''"
        >
          <span v-if="screenWidth > 992">Full Time Only</span>
          <span v-else>Full Time</span>
        </label>
        <button type="submit" class="apply-btn" @click="searchJob">
          Search
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { onMounted, onUnmounted, reactive, ref, toRefs } from "vue";
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

      const filterAction = hasJobQuery() ? "filterByTitle" : "filterByLocation";

      const payload = hasJobQuery()
        ? { jobQuery: state.jobQuery.trim(), checked: state.checked }
        : { locationQuery: state.locationQuery.trim(), checked: state.checked };

      store.dispatch(filterAction, payload);

      resetSettings();
    };

    const screenWidth = ref(window.innerWidth);
    const handleResize = () => {
      screenWidth.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      ...toRefs(state),
      searchJob,
      screenWidth,
    };
  },
};
</script>
