import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../pages/DashBoard.vue";
import HomePage from "@/pages/HomeView.vue";
import RegisterPage from "@/pages/UserRegistration.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/UserLogin.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
