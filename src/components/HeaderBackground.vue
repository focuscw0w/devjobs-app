<template>
  <div class="header">
    <header class="main-header">
      <div class="flex-container container">
        <router-link to="/">
          <h3 @click="reloadPage" class="main-header__heading">devjobs</h3>
        </router-link>
        <div class="theme-switch">
          <img src="@/assets/images/desktop/icon-sun.svg" alt="light theme" />
          <SwitchButton />
          <img src="@/assets/images/desktop/icon-moon.svg" alt="dark theme" />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import SwitchButton from "@/components/SwitchButton.vue";
import { useStore } from "vuex";

export default {
  components: { SwitchButton },
  setup() {
     const store = useStore();

    const reloadPage = () => {
      store.commit("SET_FILTERED_JOBS", store.state.data);
      window.location.reload();
    }

    return { reloadPage }
  }
};
</script>
