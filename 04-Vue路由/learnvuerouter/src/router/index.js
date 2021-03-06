// 配置路由相关的信息
import  Vue from  'vue'
import  VueRouter from 'vue-router'
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

//路由懒加载，用到时再加载
const Home = ()=>import('../components/Home');
const HomeNews = ()=>import('../components/HomeNews');
const HomeMessages = ()=>import('../components/HomeMessage')
const About = ()=>import('../components/About');
const User = ()=>import('../components/User');
const Profile = ()=>import('../components/Profile')

// 1. 通过Vue.use(插件)，安装插件
Vue.use(VueRouter);

// 2. 创建路由对象
const routes = [
  {path: '', redirect: '/home'},
  //路由嵌套
  {
    path: '/home',
    component: Home,
    meta: {title: '首页'},
    children: [
      {path: '', redirect: 'news'},
      {path: 'news', component: HomeNews},
      {path: 'messages', component: HomeMessages},
    ],
  },
  {
    path: '/about',
    component: About,
    meta: {title: "关于"},
    beforeEnter: (to, from, next)=>{
      console.log("about before enter");
      next();
    }
  },
  {path: '/user/:userId', component: User, meta: {title: '用户'}},
  {path: '/profile', component: Profile, meta: {title: '档案'}},
];

const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  mode: 'history',
  linkActiveClass: 'active',
});

//前置守卫（guard）
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  console.log(to);
  console.log("++++++++++++++++++++");
  next();
});

//后置钩子(hook)
router.afterEach((to, from)=>{
  console.log("--------------------");
});

// 3. 将router对象传入到Vue实例中
export default router;
