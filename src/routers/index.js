import Login from "../containers/HomeTemplate/Login";
import BlogDetail from "../containers/HomeTemplate/BlogDetail";
import Product from "../containers/HomeTemplate/product/Product";
import Blog from "../containers/HomeTemplate/Blog";
const publicRouterUser = [
  { path: "/", component: Login },
  { path: "/blogDetail", component: BlogDetail },
  { path: "/blog", component: Blog },
  { path: "/product", component: Product,layout:null },
];
export {publicRouterUser} 