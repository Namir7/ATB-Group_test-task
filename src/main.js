import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// third party libraries
import { v4 as uuidv4 } from "uuid";
import { format as formatDate } from "date-fns";
import "./assets/tailwind.css";

createApp(App)
  .use(router)
  .use(store)
  .provide("uuidv4", uuidv4)
  .provide("formatDate", formatDate)
  .mount("#app");
