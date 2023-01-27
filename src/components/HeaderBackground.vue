<template>
  <div class="header">
    <header class="main-header">
      <div class="flex-container container">
        <router-link to="/">
          <h3 class="main-header__heading">devjobs</h3>
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
export default {
  components: { SwitchButton },
};
</script>
