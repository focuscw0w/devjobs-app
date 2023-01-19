<template>
  <label for="switch" class="switch">
    <input type="checkbox" id="switch" :checked="checkedTheme" @click="toggleTheme" />
    <span class="slider"></span>
  </label>
</template>

<script>
import { ref } from '@vue/reactivity'
import store from "@/store/index.js"
  export default {
    setup() {
      let checkedTheme = ref(false)
      const toggleTheme = () => {
        checkedTheme = !checkedTheme
        store.commit("TOGGLE_THEME")
      }
      return {
        checkedTheme,
        toggleTheme
      }
    }
  }
</script>
