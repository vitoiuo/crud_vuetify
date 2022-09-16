import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../pages/DashboardView.vue";
import HomePage from "@/pages/HomeView.vue";
import RegisterPage from "@/pages/RegisterView.vue";
import ResumePage from "@/pages/ResumeView.vue";

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
    children: [
      {
        path: "/dashboard/:categorie",
        name: "dashboardResume",
        component: Dashboard,
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
