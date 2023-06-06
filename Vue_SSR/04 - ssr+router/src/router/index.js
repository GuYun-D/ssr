import { createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/about",
    component: () => import("../views/about.vue"),
  },
];

/**
 * 因为我们不知道当前的路由是在服务端调用还是客户端调用，所以路由模式就应该由外界传递进来
 * @param {*} history
 */
export default (history) => {
  return createRouter({
    history,
    routes,
  });
};
