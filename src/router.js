import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import ProjectDetails from "./views/ProjectDetails.vue";
import Pricing from "./views/Pricing.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  { path: "/", name: "/", component: Home },
  { path: "/index", name: "Index", component: Home },
  { path: "/home", name: "Home", component: Home },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  {
    path: "/project/details/:id",
    name: "ProjectDetails",
    component: ProjectDetails,
  },
  { path: "/pricing", name: "Pricing", component: Pricing },
  // { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
