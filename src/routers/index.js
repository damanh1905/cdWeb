import Login from "../containers/HomeTemplate/Login";
import Product from "../containers/HomeTemplate/product/Product";
const publicRouterUser = [
  { path: "/", component: Login },
  { path: "/product", component: Product,layout:null },
];
export {publicRouterUser} 