// import Login from "../containers/HomeTemplate/Login";
import Product from "../views/Product/Product";
import Order from "../views/Order/Order";
import Login from "../views/Login/Login";
import Homepage from "../views/Homepage/Homepage";
import "antd/dist/antd.css";
import User from "../views/User/User";
const publicRouterUser = [
  { path: "/", component: Login, layout: null },
  { path: "/homepage", component: Homepage },
  { path: "/user", component: User },
  { path: "/order", component: Order },
  { path: "/product", component: Product },
];
export { publicRouterUser };
