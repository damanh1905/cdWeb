import React from "react";
import NavBelowHeader from "../../../components/Layout/NavBelowHeader/NavBelowHeader";
import SearchProduct from "../../../components/Layout/Search/SearchProduct";
import "antd/dist/antd.css";
import { Checkbox, Row, Col, Slider } from "antd";
function ShopGrid() {
  const onChangeCategories = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const onChangePrice = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const onChangeGender = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <>
      <NavBelowHeader />
      {/* Breadcrumb Section Begin */}
      <section
        className="breadcrumb-section set-bg"
        style={{
          backgroundImage: "url(" + "assets/img/breadcrumb.jpg" + ")",
        }}
        data-setbg="assets/img/breadcrumb.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Organi Shop</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Product Section Begin */}
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Categories</h4>
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChangeCategories}
                  >
                    <Row>
                      <Col span={8}>
                        <Checkbox
                          value="accessories"
                          style={{ fontSize: "16px" }}
                        >
                          Accessories
                        </Checkbox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Checkbox
                          value="outerwear"
                          style={{ fontSize: "16px" }}
                        >
                          Outerwear
                        </Checkbox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="footwear" style={{ fontSize: "16px" }}>
                          Footwear
                        </Checkbox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="tops" style={{ fontSize: "16px" }}>
                          Tops
                        </Checkbox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="bottom" style={{ fontSize: "16px" }}>
                          Bottoms
                        </Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </div>
                <div className="sidebar__item">
                  <h4>Price</h4>
                  <div className="price-range-wrap">
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChangePrice}
                  >
                    <Row>
                      <Col span={1000}>
                        <Checkbox
                          value="0-500000"
                          style={{ fontSize: "16px" }}
                        >
                         0 vnd - 500.000 vnd
                        </Checkbox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={1000}>
                        <Checkbox
                          value="500000-1000000"
                          style={{ fontSize: "16px" }}
                        >
                         500.000 vnd - 1.000.000 vnd
                        </Checkbox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={1000}>
                        <Checkbox value="1000000-1500000" style={{ fontSize: "16px" }}>
                        1.000.000 vnd - 1.500.000 vnd
                        </Checkbox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={1000}>
                        <Checkbox value="1500000-2000000" style={{ fontSize: "16px" }}>
                        1.500.000 vnd - 2.000.000 vnd
                        </Checkbox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={1000}>
                        <Checkbox value="2000000-" style={{ fontSize: "16px" }}>
                        Over 2.000.000 vnd
                        </Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>

                  </div>
                </div>
                <div className="sidebar__item sidebar__item__color--option">
                  <h4>Colors</h4>
                  <div className="sidebar__item__color sidebar__item__color--white">
                    <label htmlFor="white">
                      White
                      <input type="radio" id="white" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--gray">
                    <label htmlFor="gray">
                      Gray
                      <input type="radio" id="gray" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--red">
                    <label htmlFor="red">
                      Red
                      <input type="radio" id="red" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--black">
                    <label htmlFor="black">
                      Black
                      <input type="radio" id="black" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--blue">
                    <label htmlFor="blue">
                      Blue
                      <input type="radio" id="blue" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--green">
                    <label htmlFor="green">
                      Green
                      <input type="radio" id="green" />
                    </label>
                  </div>
                </div>
                <div className="sidebar__item">
                  <h4>Popular Size</h4>
                  <div className="sidebar__item__size">
                    <label htmlFor="large">
                      Large
                      <input type="radio" id="large" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label htmlFor="medium">
                      Medium
                      <input type="radio" id="medium" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label htmlFor="small">
                      Small
                      <input type="radio" id="small" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label htmlFor="tiny">
                      Tiny
                      <input type="radio" id="tiny" />
                    </label>
                  </div>
                </div>
                <div className="sidebar__item">
                  <div className="latest-product__text">
                    <h4>Latest Products</h4>
                    <div className="latest-product__slider owl-carousel">
                      <div className="latest-prdouct__slider__item">
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="assets/img/latest-product/lp-1.jpg" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="assets/img/latest-product/lp-2.jpg" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="assets/img/latest-product/lp-3.jpg" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                      </div>
                      <div className="latest-prdouct__slider__item">
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="assets/img/latest-product/lp-1.jpg" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="assets/img/latest-product/lp-2.jpg" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="assets/img/latest-product/lp-3.jpg" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="product__discount">
                <div className="section-title product__discount__title">
                  <h2>Sale Off</h2>
                </div>
                <div className="row">
                  <div className="product__discount__slider owl-carousel">
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          style={{
                            backgroundImage:
                              "url(" +
                              "assets/img/product/discount/pd-1.jpg" +
                              ")",
                          }}
                          data-setbg="assets/img/product/discount/pd-1.jpg"
                        >
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Raisin’n’nuts</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          style={{
                            backgroundImage:
                              "url(" +
                              "assets/img/product/discount/pd-2.jpg" +
                              ")",
                          }}
                          data-setbg="assets/img/product/discount/pd-2.jpg"
                        >
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Vegetables</span>
                          <h5>
                            <a href="#">Vegetables’package</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          style={{
                            backgroundImage:
                              "url(" +
                              "assets/img/product/discount/pd-3.jpg" +
                              ")",
                          }}
                          data-setbg="assets/img/product/discount/pd-3.jpg"
                        >
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Mixed Fruitss</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          style={{
                            backgroundImage:
                              "url(" +
                              "assets/img/product/discount/pd-4.jpg" +
                              ")",
                          }}
                          data-setbg="assets/img/product/discount/pd-4.jpg"
                        >
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Raisin’n’nuts</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          style={{
                            backgroundImage:
                              "url(" +
                              "assets/img/product/discount/pd-5.jpg" +
                              ")",
                          }}
                          data-setbg="assets/product/discount/pd-5.jpg"
                        >
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Raisin’n’nuts</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          style={{
                            backgroundImage:
                              "url(" +
                              "assets/img/product/discount/pd-6.jpg" +
                              ")",
                          }}
                          data-setbg="assets/img/product/discount/pd-6.jpg"
                        >
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Raisin’n’nuts</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span>Sort By</span>
                      <select>
                        <option value={0}>Default</option>
                        <option value={0}>Default</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6>
                        <span>16</span> Products found
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2" />
                      <span className="icon_ul" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage:
                          "url(" + "assets/img/product/product-1.jpg" + ")",
                      }}
                      data-setbg="assets/img/product/product-1.jpg"
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage:
                          "url(" + "assets/img/product/product-2.jpg" + ")",
                      }}
                      data-setbg="assets/img/product/product-2.jpg"
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage:
                          "url(" + "assets/img/product/product-3.jpg" + ")",
                      }}
                      data-setbg="assets/img/product/product-3.jpg"
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage:
                          "url(" + "assets/img/product/product-4.jpg" + ")",
                      }}
                      data-setbg="assets/img/product/product-4.jpg"
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage:
                          "url(" + "assets/img/product/product-5.jpg" + ")",
                      }}
                      data-setbg="assets/img/product/product-5.jpg"
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage:
                          "url(" + "assets/img/product/product-6.jpg" + ")",
                      }}
                      data-setbg="assets/img/product/product-6.jpg"
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage:
                          "url(" + "assets/img/product/product-7.jpg" + ")",
                      }}
                      data-setbg="assets/img/product/product-7.jpg"
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage:
                          "url(" + "assets/img/product/product-8.jpg" + ")",
                      }}
                      data-setbg="assets/img/product/product-8.jpg"
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage:
                          "url(" + "assets/img/product/product-9.jpg" + ")",
                      }}
                      data-setbg="assets/img/product/product-9.jpg"
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage:
                          "url(" + "assets/img/product/product-10.jpg" + ")",
                      }}
                      data-setbg="assets/img/product/product-10.jpg"
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage:
                          "url(" + "assets/img/product/product-11.jpg" + ")",
                      }}
                      data-setbg="assets/img/product/product-11.jpg"
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage:
                          "url(" + "assets/img/product/product-12.jpg" + ")",
                      }}
                      data-setbg="assets/img/product/product-12.jpg"
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">
                  <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}
    </>
  );
}

export default ShopGrid;
