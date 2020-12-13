import Home from "../pages/home/home";
import Main from "../pages/another/main";

export const Menus = [
  {
    path: "/person",
    title: "页面主体",
    component: Home,
  },
  {
    icon: "home",
    path: "/Home",
    title: "页面列表",
    component: Main,
  },
];
