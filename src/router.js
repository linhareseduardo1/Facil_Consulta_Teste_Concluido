import Vue from "vue";
import Router from "vue-router";
import PageHome from "./components/PageHome.vue";
import PageAtendimento from "./PageAtendimento.vue";
import PageRevisao from "./PageRevisao.vue";
import Conclusao from "./components/Conclusao.vue";
import ElementButton from "./components/ElementButton.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: PageHome
    },
    {
      path: "/atendimento",
      name: "atendimento",
      component: PageAtendimento
    },
    {
      path: "/ElementButton",
      name: "ElementButton",
      component: ElementButton
    },
    {
      path: "/revisao",
      name: "revisao",
      component: PageRevisao
    },
    {
      path: "/conclusao",
      name: "conclusao",
      component: Conclusao
    }
  ]
});
