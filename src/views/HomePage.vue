<template>
  <section class="home-page">
    <div class="container">
      <SearchForm />
      <div class="home-page__columns grid-container">
        <Card
          :jobInformation="job"
          v-for="job in $store.state.filteredJobs.slice(
            0,
            currentAmountOfCards
          ) || job in $store.state.data"
          :key="job.id"
          @click="$store.commit('SET_CURRENT_OFFER', job)"
        />
      </div>

      <div v-if="currentAmountOfCards != 13" class="load-more-btn">
        <button @click="increaseAmountOfCards" class="apply-btn">
          Load More
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
import SearchForm from "@/components/SearchForm.vue";
import { onBeforeMount, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  components: { Card, SearchForm },
  setup() {
    let currentAmountOfCards = ref(9);

    const increaseAmountOfCards = () => {
      currentAmountOfCards.value = 13;
    };

    const store = useStore();
    onBeforeMount(() => {
      store.state.filteredJobs = store.state.data;
    });

    return { currentAmountOfCards, increaseAmountOfCards };
  },
};
</script>
