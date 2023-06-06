import { createApp } from "vue";
import { createWebHashHistory } from "vue-router";
import App from "../App.vue";
import createRouter from "../router";

const router = createRouter(createWebHashHistory());

let app = createApp(App);

app.use(router);
router.isReady().then((res) => {
  app.mount("#app");
});
