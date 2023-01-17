<template>
    <section class="home-page">
        <div class="container">
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
export default {
    components: { Card }
}
</script>
