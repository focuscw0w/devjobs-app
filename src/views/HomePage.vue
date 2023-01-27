<template>
  <section class="home-page">
    <div class="container">

      <SearchForm />

      <!-- refactor with grid container  -->

      <div class="home-page__columns flex-container">
        <!-- there will be a variable in slice function instead of 13 -->
       
          <Card
            :jobInformation="job"
            v-for="job in $store.state.filteredJobs"
            :key="job.id"
          />
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
import SearchForm from "@/components/SearchForm.vue";
export default {
  components: { Card, SearchForm },
};
</script>
