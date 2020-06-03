const Home = ()=>import("views/home/Home");
const Beginner = ()=>import("views/beginner/Beginner");
const Intermediate = ()=>import("views/intermediate/Intermediate");
const Advanced = ()=>import("views/advanced/Advanced");

const homeApps = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {title:'首页'},
  },
  {
    path: '/beginner',
    component: Beginner,
    meta: {title: "初级"}
  },
  {
    path: '/intermediate',
    component: Intermediate,
    meta: {title: "中级"}
  },
  {
    path: '/advanced',
    component: Advanced,
    meta: {title: "高级"}
  },
];

export default homeApps;
