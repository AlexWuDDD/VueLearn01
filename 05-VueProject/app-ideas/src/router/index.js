import Vue from 'vue';
import VueRouter from "vue-router";
import homeApps from "./homeIndex";
import beginnerApps from "./beginnerIndex";

Vue.use(VueRouter);

let routes = new Set([...homeApps, ...beginnerApps]);

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});


export default router;
