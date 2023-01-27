import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import CurrentOffer from "@/views/CurrentOffer.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: CurrentOffer
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
