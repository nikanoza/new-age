import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./main.scss";
import SignUp from "./views/SignUp.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/sign-up" },
    { path: "/sign-up", component: SignUp },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
