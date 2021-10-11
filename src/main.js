import Vue from "vue";
import App from "./App.vue";
import VueMask from "v-mask";
import router from "./router";

// import VueRouter from "vue-router";
Vue.config.productionTip = false;

Vue.use(VueMask);
new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
