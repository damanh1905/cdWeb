import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SearchProduct from "../../../components/Layout/Search/SearchProduct";
import { Link } from "react-router-dom";
import { doGet } from "../../../utils/api/api";
function Wishlist(props) {
  const [dataWishList, setDataWishList] = useState([]);
  const [checkData, setCheckData] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await doGet(`wishlist/findAll?action=show`);
        console.log(data);
        setDataWishList(data);
        setCheckData(true);
      } catch (e) {
        console.log(e);
        // setNavigate(true);
      }
    })();
  }, [checkData]);
  const handleRemove = (id) => {
    (async () => {
      try {
        const { data } = await doGet(
          `wishlist/findAll?action=remove&favProductId=${id}`
        );
        console.log(data);
        setCheckData(false);
      } catch (e) {
        console.log(e);
        // setNavigate(true);
      }
    })();
  };
  return (
    <>
      <section className="hero hero-normal">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars" />
                  <span>All departments</span>
                </div>
                <ul>
                  <li>
                    <a href="#">Fresh Meat</a>
                  </li>
                  <li>
                    <a href="#">Vegetables</a>
                  </li>
                  <li>
                    <a href="#">Fruit &amp; Nut Gifts</a>
                  </li>
                  <li>
                    <a href="#">Fresh Berries</a>
                  </li>
                  <li>
                    <a href="#">Ocean Foods</a>
                  </li>
                  <li>
                    <a href="#">Butter &amp; Eggs</a>
                  </li>
                  <li>
                    <a href="#">Fastfood</a>
                  </li>
                  <li>
                    <a href="#">Fresh Onion</a>
                  </li>
                  <li>
                    <a href="#">Papayaya &amp; Crisps</a>
                  </li>
                  <li>
                    <a href="#">Oatmeal</a>
                  </li>
                  <li>
                    <a href="#">Fresh Bananas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <SearchProduct />
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="breadcrumb-section set-bg"
        style={{
          backgroundImage: "url(" + "assets/img/breadcrumb.jpg" + ")",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Wishlist</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Wishlist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Products</th>
                      <th>Price</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {dataWishList &&
                      dataWishList.map((items, index) => (
                        <tr key={index}>
                          <td className="shoping__cart__item">
                            <img src="img/cart/cart-1.jpg" alt="" />
                            <h5>{items.productEntities.name}</h5>
                          </td>
                          <td className="shoping__cart__price">
                            {" "}
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(items.productEntities.price)}
                          </td>
                          <td className="shoping__cart__item__close">
                            <span
                              className="icon_close"
                              onClick={() =>
                                handleRemove(items.productEntities.id)
                              }
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <Link to="/" className="primary-btn cart-btn">
                  CONTINUE SHOPPING
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Wishlist.propTypes = {};

export default Wishlist;
