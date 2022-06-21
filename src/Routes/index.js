// Layouts
import { HeaderOnly } from "~/Components/Layout";

import Home from "~/Page/Home";
import Following from "~/Page/Following";
import Upload from "~/Page/Upload";
import Search from "~/Page/Search";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/search", component: Search, layout: null },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
