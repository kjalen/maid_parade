import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
