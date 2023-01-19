<template>
  <article class="card">
    <img
      :src="require(`@/assets/images/logos/${jobInformation.logo}`)"
      alt="company logo"
      class="card__image"
      :style="jobInformation.logoBackground"
    />

    <p class="flex-container">
      <span class="card__offer-time">{{ jobInformation.postedAt }}</span>
      •
      <span class="card__job-type">{{ jobInformation.contract }}</span>
    </p>
    <h4 class="card__job-name">{{ jobInformation.position }}</h4>
    <p class="card__job-company">{{ jobInformation.company }}</p>
    <p class="card__job-location">{{ jobInformation.location }}</p>
  </article>
</template>

<script>
export default {
  props: ["jobInformation"],
};
</script>
