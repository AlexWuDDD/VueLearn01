const Bin2Dec = ()=>import("views/beginner/apps/Bin2Dec");
const BorderRadiusPreviewer = ()=>import("views/beginner/apps/BorderRadiusPreviewer")
const Calculator = ()=>import("views/beginner/apps/Calculator");
const ChristmasLights = ()=>import("views/beginner/apps/ChristmasLights")
const CauseEffect = ()=>import("views/beginner/apps/CauseEffect")
const ColorCycle = ()=>import("views/beginner/apps/ColorCycle")
const Countdown = ()=>import("views/beginner/apps/Countdown")

const beginnerApps = [
  {path: '/bin2dec', component: Bin2Dec, meta:{title:'Bin2Dec'}},
  {path: '/borderRadiusPreviewer', component: BorderRadiusPreviewer, meta:{title:'BorderRadiusPreviewer'}},
  {path: '/calculator', component: Calculator, meta: {title:'Calculator'}},
  {path: '/christmasLights', component: ChristmasLights, meta: {title:'ChristmasLights'}},
  {path: '/causeEffect', component: CauseEffect, meta: {title:'CauseEffect'}},
  {path: '/colorCycle', component: ColorCycle, meta: {title:'ColorCycle'}},
  {path: '/countdown', component: Countdown, meta: {title:'Countdown'}},
];

export default beginnerApps;
