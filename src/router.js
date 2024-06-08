import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import ProjectDetails from "./views/ProjectDetails.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/index", component: Home },
  { path: "/home", component: Home },
  { path: "/dashboard", component: Dashboard },
  { path: "/project/details:id", component: ProjectDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
