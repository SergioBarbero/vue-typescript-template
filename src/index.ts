import App from "@/app.vue";
import Vue from "vue";
import store from "./store";

new Vue({
  el: "#app",
  store,
  template: `<App/>`,
  components: {
    App,
  },
});
