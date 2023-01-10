<template>
  <HeaderBackground />
  <!--
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  -->

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
