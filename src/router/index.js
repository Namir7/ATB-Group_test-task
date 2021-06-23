import { createRouter, createWebHashHistory } from "vue-router";

import Main from "../views/Main.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
