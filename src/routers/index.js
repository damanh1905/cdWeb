import Login from "../containers/HomeTemplate/Login";
import BlogDetail from "../containers/HomeTemplate/BlogDetail";
import Product from "../containers/HomeTemplate/product/Product";
const publicRouterUser = [
  { path: "/", component: Login },
  { path: "/blogDetail", component: BlogDetail },
  { path: "/product", component: Product,layout:null },
];
export {publicRouterUser} 