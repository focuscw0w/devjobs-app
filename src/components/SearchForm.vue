<template>
    <form class="search-form">
        <div class="flex-container">
            <div class="search-form__item" id="title">
                <img src="@/assets/images/desktop/icon-search.svg" alt="search by title">
                <input type="text" placeholder="Filter by title, companies, expertise..." class="search-input">
            </div>
            <div class="search-form__item" id="location">
                <img src="@/assets/images/desktop/icon-location.svg" alt="search by location">
                <input type="text" placeholder="Filter by location..." class="search-input">
            </div>
            <div class="search-form__item" id="search">
                <input type="checkbox" id="checkbox" v-model="checked">
                <label for="checkbox">Full Time Only</label>
                <button type="submit" class="search-form__btn">Search</button>
            </div>
        </div>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const checked = ref(false)
        return {
            checked
        }
    }
}
</script>

<style>

</style>