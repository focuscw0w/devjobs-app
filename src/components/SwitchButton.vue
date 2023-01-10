<template>
  <label for="checkbox" class="switch" @click="toggleTheme">
    <input type="checkbox" :checked="darkTheme" />
    <span class="slider"></span>
  </label>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  setup() {
    // refactor with vuex

    const state = reactive({
      darkTheme: false,
    });

    const toggleTheme = () => {
      state.darkTheme = !state.darkTheme;
    };

    return {
      ...toRefs(state),
      toggleTheme,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
