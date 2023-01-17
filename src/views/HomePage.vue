<template>
    <section class="home-page">
        <div class="container">
            <SearchForm />
            <div class="home-page__columns flex-container">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </section>
</template>

<script>
import Card from "@/components/Card.vue";
import SearchForm from "@/components/SearchForm.vue";
export default {
    components: { Card, SearchForm }
}
</script>
