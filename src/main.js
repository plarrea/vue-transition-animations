import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import ListAnimations from "./pages/ListAnimations.vue";
import OtherAnimations from "./pages/OtherAnimations.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ListAnimations },
    { path: "/other", component: OtherAnimations },
  ],
});

const app = createApp(App);

app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
