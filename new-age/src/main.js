import Vue from "vue";
import VueRouter from "vue-router";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import "./main.scss";
import SignUp from "./views/SignUp.vue";
import SignIn from "./views/SignIn.vue";
import Vuex from "vuex";
import vueStore from "./store/index.js";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueCookies);
Vue.use(Vuex);

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/sign-up" },
    { path: "/sign-up", component: SignUp },
    { path: "/sign-in", component: SignIn },
  ],
});

const store = new Vuex.Store({
  ...vueStore,
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
