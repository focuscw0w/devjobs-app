<template>
  <HeaderBackground />
  <router-view></router-view>
</template>

<script>
import HeaderBackground from "@/components/HeaderBackground.vue";
  export default {
    components: { HeaderBackground }
  }
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
