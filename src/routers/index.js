// import Login from "../containers/HomeTemplate/Login";
import BlogDetail from "../containers/HomeTemplate/BlogDetail";
import Product from "../containers/HomeTemplate/product/Product";
import Blog from "../containers/HomeTemplate/Blog";
import CheckOut from "../containers/HomeTemplate/CheckOut";
import Contact from "../containers/HomeTemplate/Contact";
import Home from "../containers/HomeTemplate/Home";
import ShopDetail from "../containers/HomeTemplate/ShopDetail";
import ShopGrid from "../containers/HomeTemplate/ShopGrid";
import ShoppingCart from "../containers/HomeTemplate/ShoppingCart";
import Register from "../containers/HomeTemplate/Register/Register";
import Login from "../containers/HomeTemplate/Login/Login";
const publicRouterUser = [
  { path: "/", component: Home },
  { path: "/blogDetail", component: BlogDetail },
  { path: "/blog", component: Blog },
  { path: "/checkout", component: CheckOut },
  { path: "/contact", component: Contact },
  { path: "/home", component: Home },
  { path: "/shopDetail/:id", component: ShopDetail },
  // { path: "/shopDetail", component: ShopDetail },
  { path: "/shopGrid", component: ShopGrid },
  { path: "/shoppingCart", component: ShoppingCart },
  { path: "/product", component: Product, layout: null },
  { path: "/register", component: Register, layout: null },
  { path: "/login", component: Login, layout: null },
];
export { publicRouterUser };
