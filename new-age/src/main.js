import Vue from "vue";
import VueRouter from "vue-router";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import "./main.scss";
import Vuex from "vuex";
import vueStore from "./store/index.js";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueCookies);
Vue.use(Vuex);

const SignUp = () => import("./views/SignUp.vue");
const SignIn = () => import("./views/SignIn.vue");
const ProfilePage = () => import("./views/ProfilePage.vue");

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/sign-up" },
    { path: "/sign-up", component: SignUp },
    { path: "/sign-in", component: SignIn },
    { path: "/profile", component: ProfilePage },
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
