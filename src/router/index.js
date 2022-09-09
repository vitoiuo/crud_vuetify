import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../pages/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/accounts",
    name: "AccountsView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/AccountsView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
