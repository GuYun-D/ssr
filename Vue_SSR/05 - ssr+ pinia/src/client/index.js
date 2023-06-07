import { createApp } from "vue";
import { createWebHashHistory } from "vue-router";
import { createPinia } from "pinia";
import App from "../App.vue";
import createRouter from "../router";

const router = createRouter(createWebHashHistory());
const pinia = createPinia();

let app = createApp(App);

app.use(router);
app.use(pinia);
router.isReady().then((res) => {
  app.mount("#app");
});
