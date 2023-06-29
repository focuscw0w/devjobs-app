<template>
  <div :class="$store.state.darkTheme ? 'body-dark' : 'body-light'">
    <HeaderBackground />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBackground from "@/components/HeaderBackground.vue";
export default {
  components: { HeaderBackground },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
