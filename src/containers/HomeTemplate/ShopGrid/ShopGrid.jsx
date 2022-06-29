import React, { useEffect, useState } from "react";
import NavBelowHeader from "../../../components/Layout/NavBelowHeader/NavBelowHeader";
import SearchProduct from "../../../components/Layout/Search/SearchProduct";
import "antd/dist/antd.css";
import { Checkbox, Row, Col, Slider } from "antd";
import { doGet } from "../../../utils/api/api";
function ShopGrid() {
  const [products, setProduct] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [priceProduct, setPriceProduct] = useState([]);
  const [catregory, setCategory] = useState([]);
  const [change, setChange] = useState(true);
  const [nameFilter, setNameFilter] = useState([]);

  useEffect(() => {
    setChange(true);
    console.log(catregory);
    console.log(priceProduct);
    if (nameFilter.length > 0) {
      (async () => {
        try {
          const { data } = await doGet(
            `http://localhost:8082/api/product/productFilter?${nameFilter[0]}&category=${catregory}&${nameFilter[1]}&priceRanges=${priceProduct}`
          );
          setProduct(data.data.products);
          setTotalProduct(data.data.totalitems);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      console.log("full");
      (async () => {
        try {
          const { data } = await doGet("product/productFilter");
          // console.log(data.data.products);
          setProduct(data.data.products);
          setTotalProduct(data.data.totalitems);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [change]);

  const onChangeCategories = (checkedValues) => {
    setChange(false);
    if (checkedValues.length > 0) {
      setCategory(checkedValues);
      nameFilter[0] = "categoryId=";
      setNameFilter(nameFilter);
    } else {
      nameFilter[0] = "";
      setNameFilter(nameFilter);
    }

    // (async () => {
    //   try {
    //     const { data } = await doGet(
    //       `product/productFilter?categoryId=&category=${checkedValues}`
    //     );
    //     setProduct(data.data.products);
    //     setTotalProduct(data.data.totalitems);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();

    // console.log("checked = ", typeof checkedValues);
  };
  const onChangePrice = (checkedValues) => {
    setChange(false);
    if (checkedValues.length > 0) {
      setPriceProduct([
        checkedValues[0].split(",")[0],
        checkedValues[checkedValues.length - 1].split(",")[1],
      ]);
      nameFilter[1] = "priceRange=";
      setNameFilter(nameFilter);
    } else {
      nameFilter[1] = "";
      setNameFilter(nameFilter);
    }

    // if (priceProduct) {
    //   (async () => {
    //     try {
    //       const { data } = await doGet(
    //         `http://localhost:8082/api/product/productFilter?priceRange=&priceRanges=${priceProduct}`
    //       );
    //       setProduct(data.data.products);
    //       setTotalProduct(data.data.totalitems);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   })();
    // }
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
                  <a href="./">Home</a>
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
                        <Checkbox value="1" style={{ fontSize: "16px" }}>
                          Accessories
                        </Checkbox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="2" style={{ fontSize: "16px" }}>
                          Outerwear
                        </Checkbox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="3" style={{ fontSize: "16px" }}>
                          Footwear
                        </Checkbox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="4" style={{ fontSize: "16px" }}>
                          Tops
                        </Checkbox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="5" style={{ fontSize: "16px" }}>
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
                            value="0,500000"
                            style={{ fontSize: "16px" }}
                          >
                            0 vnd - 500.000 vnd
                          </Checkbox>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={1000}>
                          <Checkbox
                            value="500000,1000000"
                            style={{ fontSize: "16px" }}
                          >
                            500.000 vnd - 1.000.000 vnd
                          </Checkbox>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={1000}>
                          <Checkbox
                            value="1000000,1500000"
                            style={{ fontSize: "16px" }}
                          >
                            1.000.000 vnd - 1.500.000 vnd
                          </Checkbox>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={1000}>
                          <Checkbox
                            value="1500000,2000000"
                            style={{ fontSize: "16px" }}
                          >
                            1.500.000 vnd - 2.000.000 vnd
                          </Checkbox>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={1000}>
                          <Checkbox
                            value="2000000,1000000000"
                            style={{ fontSize: "16px" }}
                          >
                            Over 2.000.000 vnd
                          </Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </div>
                </div>
                <div className="sidebar__item sidebar__item__color--option">
                  <h4>Gender</h4>
                  <Checkbox.Group
                      style={{
                        width: "100%",
                      }}
                      onChange={onChangeGender}
                    >
                      <Row>
                        <Col span={1000}>
                          <Checkbox
                            value="male"
                            style={{ fontSize: "16px" }}
                          >
                            Male
                          </Checkbox>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={1000}>
                          <Checkbox
                            value="female"
                            style={{ fontSize: "16px" }}
                          >
                           Female
                          </Checkbox>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={1000}>
                          <Checkbox
                            value="unisex"
                            style={{ fontSize: "16px" }}
                          >
                           Unisex
                          </Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                </div>
                {/* <div className="sidebar__item">
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
                </div> */}
              </div>
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span>Sort By</span>
                      <select>
                        <option value={0}>Name A->Z</option>
                        <option value={0}>Name Z->A</option>
                        <option value={0}>Price High->Low</option>
                        <option value={0}>Price Low->High</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6>
                        <span>{totalProduct && totalProduct}</span> Products
                        found
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
                {products &&
                  products.map((items, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product__item">
                        <div
                          className="product__item__pic set-bg"
                          style={{
                            backgroundImage:
                              "url(" +
                              `/assets/img/secondhand/accessories/${items?.imageEntity[0]?.url}` +
                              ")",
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
                            <a href="#">{items.name}</a>
                          </h6>
                          <h5>
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(items.price)}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
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
