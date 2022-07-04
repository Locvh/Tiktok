import routeConfig from '~/Config/route'

// Layouts
import { HeaderOnly } from "~/Components/Layout";

import Home from "~/Page/Home";
import Following from "~/Page/Following";
import Upload from "~/Page/Upload";
import Search from "~/Page/Search";
import Profile from "~/Page/Profile";

const publicRoutes = [
  { path: routeConfig.home, component: Home },
  { path: routeConfig.following, component: Following },
  { path: routeConfig.search, component: Search, layout: null },
  { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routeConfig.profile, component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
