import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { Link } from "react-router-dom";
import { doGet } from "../../../../utils/api/api";
import { useNavigate } from "react-router-dom";

function Header() {
  const [userName, setUserName] = useState();
  const [checkLogin, setCheckLogin] = useState(true);
  useEffect(() => {
    const token = Cookies.get("token");

    if (token !== undefined) {
      const userName = localStorage.getItem("username");
      if (userName !== undefined) {
        setUserName(userName);
        setCheckLogin(false);
      }
    }
  }, []);

  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="header__top__left">
                <ul>
                  <li style={{ display: "flex" }}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <p> {userName && <p> {userName} </p>}</p>
                  </li>
                  {/* <li>Free Shipping for all Order of $99</li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="header__top__right">
                <div className="header__top__right__social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                </div>
                <div className="header__top__right__language">
                  <img src="assets/img/language.png" alt="" />
                  <div>English</div>
                  <span className="arrow_carrot-down"></span>
                  <ul>
                    <li>
                      <a href="#">Spanis</a>
                    </li>
                    <li>
                      <a href="#">English</a>
                    </li>
                  </ul>
                </div>
                <FormLogin
                  checkLogin={checkLogin}
                />
                {/* <div className="header__top__right__auth">
                  <Link to={"/login"}>Login</Link>
                </div>
                <div className="header__top__right__auth">
                  <Link to={"/register"} style={{ marginLeft: "18px" }}>
                    {" "}
                    Register
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__logo">
              <a href="./index.html">
                <img src="assets/img/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header__menu">
              <ul>
                <li className="active">
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/shopGrid"}>Shop</Link>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul className="header__menu__dropdown">
                    <li>
                      <Link to={"/shoppingCart"}>Shopping Cart</Link>
                    </li>
                    <li>
                      <Link to={"/checkout"}>Checkout</Link>
                    </li>
                    <li>
                      <Link to={"/blogDetail"}>Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__cart">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-heart"></i> <span>1</span>
                  </a>
                </li>
                <li>
                  <Link to="/shoppingCart">
                    <i className="fa fa-shopping-bag"></i> <span>3</span>
                  </Link>
                </li>
              </ul>
              <div className="header__cart__price">
                item: <span>$150.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="humberger__open">
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </header>
  );
}
function FormLogin({ checkLogin }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    const userName = localStorage.getItem("username");
    (async () => {
      const data = await doGet(`auth/logout?userName=${userName}`);
      console.log(data);
      Cookies.remove("token", { path: "" });
      Cookies.remove("refreshToken", { path: "" });
      localStorage.removeItem("username");
      navigate("/login");
    })();
  };

  if (checkLogin === true) {
    console.log(checkLogin);
    return (
      <>
        <div className="header__top__right__auth">
          <Link to={"/login"}>Login</Link>
        </div>
        <div className="header__top__right__auth">
          <Link to={"/register"} style={{ marginLeft: "18px" }}>
            Register
          </Link>
        </div>
      </>
    );
  } else {
    console.log(checkLogin);
    return (
      <div className="header__top__right__auth" onClick={handleLogout}>
        logout
      </div>
    );
  }
}
export default Header;
