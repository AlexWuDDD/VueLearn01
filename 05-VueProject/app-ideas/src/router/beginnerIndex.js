const Bin2Dec = ()=>import("views/beginner/apps/Bin2Dec");
const BorderRadiusPreviewer = ()=>import("views/beginner/apps/BorderRadiusPreviewer")

const beginnerApps = [
  {path: '/bin2dec', component: Bin2Dec, meta:{title:'Bin2Dec'}},
  {path: '/borderRadiusPreviewer', component: BorderRadiusPreviewer, meta:{title:'BorderRadiusPreviewer'}},
];

export default beginnerApps;
