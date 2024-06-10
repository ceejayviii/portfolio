import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import DashboardView from "./views/DashboardView.vue";
import ProjectDetailsView from "./views/ProjectDetailsView.vue";
import PricingView from "./views/PricingView.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  { path: "/", name: "/", component: HomeView },
  { path: "/index", name: "Index", component: HomeView },
  { path: "/home", name: "Home", component: HomeView },
  { path: "/dashboard", name: "Dashboard", component: DashboardView },
  {
    path: "/project/details/:id",
    name: "ProjectDetails",
    component: ProjectDetailsView,
  },
  { path: "/pricing", name: "Pricing", component: PricingView },
  // { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
