import Vue from "vue";
import VueRouter from "vue-router";

const Home = ()=>import("../views/home/Home");
const Category = ()=>import("../views/category/Category");
const Cart = ()=>import("../views/cart/Cart");
const Profile = ()=>import("../views/profile/Profile");

//1. 安装插件
Vue.use(VueRouter);

//2. 创建路由对象
const routes = [
  // 配置路由和组件之间的映射关系
  {
    path: '/home',
    meta: {title: '首页'},
    component: Home,
  },
  {
    path: '/category',
    meta: {title: '分类'},
    component: Category,
  },
  {
    path: '/cart',
    meta: {title: '购物'},
    component: Cart,
  },
  {
    path: '/profile',
    meta: {title: '我的'},
    component: Profile,
  },

];
const router = new VueRouter({
  routes,
  mode: 'history',
});

//3. 将router传入到Vue实例
export default router;
