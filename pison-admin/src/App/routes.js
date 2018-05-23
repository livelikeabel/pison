import Main from "./pages/Main";
import Artist from "./pages/Artist";
import Label from "./pages/Label";
import Release from "./pages/Release";
import User from "./pages/User";

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '/artist',
    component: Artist,
  },
  {
    path: '/label',
    component: Label,
  },
  {
    path: '/release',
    component: Release,
  }
];

export default routes;