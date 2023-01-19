<template>
    <div class="header">
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
        <div class="container">
            <SearchForm />
        </div>
    </div>
</template>

<script>
import SwitchButton from "@/components/SwitchButton.vue";
import SearchForm from "@/components/SearchForm.vue"
export default {
    components: { SwitchButton, SearchForm }
}
</script>
