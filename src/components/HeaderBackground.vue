<template>
    <header class="main-header">
        <div class="flex-container container">
            <h3 class="main-header__heading">devjobs</h3>
            <div class="theme-switch">
                <img src="@/assets/images/desktop/icon-sun.svg" alt="light theme">
                <SwitchButton />
                <img src="@/assets/images/desktop/icon-moon.svg" alt="dark theme">
            </div>
        </div>
    </header>
</template>

<script>
import SwitchButton from "@/components/SwitchButton.vue";
export default {
    components: { SwitchButton }
}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>