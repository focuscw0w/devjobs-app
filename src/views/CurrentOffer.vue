<template>
  <section v-if="showOffer" class="offer container-small">
    <div class="offer__company flex-container">
      <div
        class="offer__company-logo"
        :style="$store.state.currentOffer.logoBackground"
      >
        <img
          :src="
            require(`@/assets/images/logos/${$store.state.currentOffer.logo}`)
          "
          alt="company logo"
        />
      </div>
      <div
        :class="
          $store.state.darkTheme
            ? 'offer__company-info dark'
            : 'offer__company-info'
        "
      >
        <div>
          <h5
            :class="
              $store.state.darkTheme
                ? 'offer__company-name dark'
                : 'offer__company-name'
            "
          >
            {{ $store.state.currentOffer.company }}
          </h5>
          <span class="offer__company-site">
            {{ $store.state.currentOffer.website }}
          </span>
        </div>
        <button type="submit" class="offer__company-btn">Company Site</button>
      </div>
    </div>

    <article
      :class="$store.state.darkTheme ? 'offer__details dark' : 'offer__details'"
    >
      <div class="flex-container">
        <span class="offer__details-time">{{
          $store.state.currentOffer.postedAt
        }}</span>
        <span class="offer__details-splitter">•</span>
        <span class="offer__details-type">
          {{ $store.state.currentOffer.contract }}
        </span>
      </div>
      <div class="offer__details-job">
        <h3
          :class="
            $store.state.darkTheme
              ? 'offer__details-heading dark'
              : 'offer__details-heading'
          "
        >
          {{ $store.state.currentOffer.position }}
        </h3>
        <button type="submit" class="apply-btn">Apply Now</button>
      </div>
      <p class="offer__details-location">
        {{ $store.state.currentOffer.location }}
      </p>

      <div class="offer__details-info mt-2">
        <section class="offer__details__section">
          <p class="offer__details-paragraph">
            {{ $store.state.currentOffer.description }}
          </p>
        </section>

        <section class="offer__details__section">
          <h5
            :class="
              $store.state.darkTheme
                ? 'offer__details-sub-heading mb-0-5 dark'
                : 'offer__details-sub-heading mb-0-5'
            "
          >
            Requirements
          </h5>

          <p class="offer__details-paragraph">
            {{ $store.state.currentOffer.requirements.content }}
          </p>

          <ul class="offer__details-requirements">
            <li
              v-for="requirement in $store.state.currentOffer.requirements
                .items"
              :key="requirement"
              class="offer__details-requirements__item ul mb-0-5"
            >
              {{ requirement }}
            </li>
          </ul>
        </section>

        <section class="offer__details__section">
          <h5
            :class="
              $store.state.darkTheme
                ? 'offer__details-sub-heading mb-0-5 dark'
                : 'offer__details-sub-heading mb-0-5'
            "
          >
            What You Will Do
          </h5>

          <p class="offer__details-paragraph">
            {{ $store.state.currentOffer.role.content }}
          </p>
          <ol class="offer__details-requirements">
            <li
              v-for="role in $store.state.currentOffer.role.items"
              :key="role"
              class="offer__details-requirements__item ol mb-0-5"
            >
              {{ role }}
            </li>
          </ol>
        </section>
      </div>
    </article>
  </section>

  <footer
    :class="$store.state.darkTheme ? 'offer-footer dark' : 'offer-footer'"
  >
    <div class="container-small">
      <div class="flex-container">
        <div class="offer-footer__company">
          <h3
            :class="
              $store.state.darkTheme
                ? 'offer-footer__company-position mb-0-5 dark'
                : 'offer-footer__company-position mb-0-5'
            "
          >
            {{ $store.state.currentOffer.position }}
          </h3>
          <p class="offer-footer__company-name">
            {{ $store.state.currentOffer.company }}
          </p>
        </div>
        <button type="submit" class="apply-btn">Apply now</button>
      </div>
    </div>
  </footer>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    // there was showing an error /undefined

    let showOffer = ref(false);
    const delay = 0.1;

    onMounted(() => {
      const currentOffer = JSON.parse(localStorage.getItem("currentOffer"));
      store.commit("SET_FILTERED_JOBS", currentOffer);
      setTimeout(() => {
        showOffer.value = true;
      }, delay);
    });

    return { showOffer };
  },
};
</script>
