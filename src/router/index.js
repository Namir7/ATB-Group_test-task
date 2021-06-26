import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "../views/MainPage.vue";
import CreatePage from "../views/CreatePage.vue";
import EditPage from "../views/EditPage.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/create",
    component: CreatePage,
  },
  {
    path: "/edit/:id",
    component: EditPage,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes,
});

export default router;
