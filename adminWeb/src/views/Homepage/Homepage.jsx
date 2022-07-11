import React, { useState, useEffect } from "react";
import { doGet } from "../../utils/api/api";
import "./Homepage.scss";
import { Column, Pie } from "@ant-design/plots";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, message, Button } from "antd";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function Homepage() {
  const [month, setMonth] = useState(1);
  const [newChartData, setNewChartData] = useState({
    labels: ["accessories", "am", "12", "aa", "ff"],
    datasets: [
      {
        label: "doanh thu ",
        data: [300, 50, 100, 30, 40],
        backgroundColor: ["Red", "Orange", "Yellow", "Green", "Blue"],
      },
    ],
  });
  const data1 = [
    {
      type: "1",
      sales: 0,
    },
    {
      type: "2",
      sales: 0,
    },
    {
      type: "3",
      sales: 0,
    },
    {
      type: "4",
      sales: 0,
    },
    {
      type: "5",
      sales: 0,
    },
    {
      type: "6",
      sales: 0,
    },
    {
      type: "7",
      sales: 0,
    },
    {
      type: "8",
      sales: 0,
    },
    {
      type: "9",
      sales: 0,
    },
    {
      type: "10",
      sales: 0,
    },
    {
      type: "11",
      sales: 0,
    },
    {
      type: "12",
      sales: 0,
    },
    {
      type: "13",
      sales: 0,
    },
    {
      type: "14",
      sales: 0,
    },
    {
      type: "15",
      sales: 0,
    },
    {
      type: "16",
      sales: 0,
    },
    {
      type: "17",
      sales: 0,
    },
    {
      type: "18",
      sales: 0,
    },
    {
      type: "19",
      sales: 0,
    },
    {
      type: "20",
      sales: 0,
    },
    {
      type: "21",
      sales: 0,
    },
    {
      type: "22",
      sales: 0,
    },
    {
      type: "23",
      sales: 0,
    },
    {
      type: "24",
      sales: 0,
    },
    {
      type: "25",
      sales: 0,
    },
    {
      type: "26",
      sales: 0,
    },
    {
      type: "27",
      sales: 0,
    },
    {
      type: "28",
      sales: 0,
    },
    {
      type: "29",
      sales: 0,
    },
    {
      type: "30",
      sales: 0,
    },
    {
      type: "31",
      sales: 0,
    },
  ];
  const [data, setData] = useState(data1);
  const [totalPrice, setTotalPrice] = useState([]);

  const convertData = (list) => {
    let newList = data.map((element) => {
      let result = {
        type: element.type,
        sales: element.sales,
      };
      list.forEach((ele) => {
        if (ele.dateCreated.slice(-2) === element.type) {
          result.type = element.type;
          result.sales = ele.totalPriceOrder;
        }
      });
      return result;
    });
    setData(newList);
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await doGet(
          `/chart/admin/getChartDayMonth?month=${month}&year=2022`
        );
        console.log(data.data);
        convertData(data.data);
      } catch (e) {
        console.log("aaaaa", e);

        console.log("status", e.status);
        // navigate("/login");
      }
    })();
  }, [month]);

  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Ngày",
      },
      sales: {
        alias: "doanh thu",
      },
    },
  };

  const [doughnutChartData, setDoughnutChartData] = useState({
    title: [],
    label: ["VNĐ", "VNĐ", "VNĐ", "VNĐ", "VNĐ"],
    backgroundColor: ["Red", "Orange", "Yellow", "Green", "Blue"],
    data: [],
    cutoutPercentage: 80,
    postfix: "k",
  });
  console.log(month);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await doGet(
          "/chart/admin/getChartMonthCi?month=08&year=2022"
        );
        setDoughnutChartData({
          ...doughnutChartData,
          title: data.data.title,
          data: data.data.data,
        });
        setNewChartData({
          ...newChartData,
          labels: data.data.title,
          datasets: [
            {
              label: "Doanh thu",
              data: data.data.data,
              backgroundColor: ["Red", "Orange", "Yellow", "Green", "Blue"],
              // hoverBackgroundColor: "#377dff",
              borderColor: "#377dff",
            },
          ],
        });
        // console.log(data.data.data);
      } catch (e) {
        console.log("aaaaa", e);

        console.log("status", e.status);
        // navigate("/login");
      }
    })();
  }, []);
  const onClick = ({ key }) => {
    setMonth(parseInt(key));
  };
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "Tháng 1",
          key: "1",
        },
        {
          label: "Tháng 2",
          key: "2",
        },
        {
          label: "Tháng 3",
          key: "3",
        },
        {
          label: "Tháng 4",
          key: "4",
        },
        {
          label: "Tháng 5",
          key: "5",
        },
        {
          label: "Tháng 6",
          key: "6",
        },
        {
          label: "Tháng 7",
          key: "7",
        },
        {
          label: "Tháng 8",
          key: "8",
        },
        {
          label: "Tháng 9",
          key: "9",
        },
        {
          label: "Tháng 10",
          key: "10",
        },
        {
          label: "Tháng 11",
          key: "11",
        },
        {
          label: "Tháng 12",
          key: "12",
        },
      ]}
    />
  );

  console.log("doughnutChartData", doughnutChartData);
  return (
    <main id="content" role="main" className="main homepage-main">
      {/* Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm mb-2 mb-sm-0">
              <h1 className="page-header-title">Chào bạn.</h1>
              <p className="page-header-text">
                Đây là những gì đang xảy ra với trang thương mại điện tử của
                bạn.
              </p>
            </div>
          </div>
        </div>
        {/* End Page Header */}
        {/* Card (Chứa Thông tin tổng số lượng: Web sale, Request sale, Order, User, Product )*/}
        <div className="card card-body mb-3 mb-lg-5">
          <div className="row gx-lg-4">
            {/* Website Sales */}
            <div className="col-sm-6 col-lg-3">
              <div className="media">
                <div className="media-body">
                  <h6 className="card-subtitle">Doanh thu</h6>
                  <span className="card-title h3">$7,820.75</span>
                  <div className="d-flex align-items-center">
                    <span className="d-block font-size-sm">$5k trong ngày</span>
                    <span className="badge badge-soft-success ml-2">
                      <i className="tio-trending-up" /> 4.3%
                    </span>
                  </div>
                </div>
                <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                  <i className="tio-shop" />
                </span>
              </div>
              <div className="d-lg-none">
                <hr />
              </div>
            </div>
            {/* End Website Sales */}
            {/* Request Sales */}
            <div className="col-sm-6 col-lg-3 column-divider-sm">
              <div className="media">
                <div className="media-body">
                  <h6 className="card-subtitle">Yêu cầu bán hàng</h6>
                  <span className="card-title h3">210,000</span>
                  <div className="d-flex align-items-center">
                    <span className="d-block font-size-sm">1k chưa duyệt</span>
                    <span className="badge badge-soft-success ml-2">
                      <i className="tio-trending-up" /> 12.5%
                    </span>
                  </div>
                </div>
                <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                  <i className="tio-website" />
                </span>
              </div>
              <div className="d-lg-none">
                <hr />
              </div>
            </div>
            {/* End Request Sales */}
            {/* Products */}
            <div className="col-sm-6 col-lg-3 column-divider-lg">
              <div className="media">
                <div className="media-body">
                  <h6 className="card-subtitle">Sản phẩm</h6>
                  <span className="card-title h3">450,503</span>
                  <div className="d-flex align-items-center">
                    <span className="d-block font-size-sm">6k trong kho</span>
                  </div>
                </div>
                <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                  <i className="tio-label-off" />
                </span>
              </div>
              <div className="d-sm-none">
                <hr />
              </div>
            </div>
            {/* End Products */}
            {/* Order */}
            <div className="col-sm-6 col-lg-3 column-divider-sm">
              <div className="media">
                <div className="media-body">
                  <h6 className="card-subtitle">Đơn hàng</h6>
                  <span className="card-title h3">3,982</span>
                  <div className="d-flex align-items-center">
                    <span className="d-block font-size-sm">150 trong ngày</span>
                    <span className="badge badge-soft-danger ml-2">
                      <i className="tio-trending-down" /> 4.4%
                    </span>
                  </div>
                </div>
                <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                  <i className="tio-users-switch" />
                </span>
              </div>
            </div>
            {/* End Order */}
          </div>
        </div>
        {/* End Card */}
        {/* Card (Biểu đồ cột: Bán hàng theo thời gian)*/}
        <div className="card mb-3 mb-lg-5">
          {/* Header */}
          <div className="card-header">
            <div className="row align-items-center flex-grow-1">
              <div className="col-sm mb-2 mb-sm-0">
                <h4 className="card-header-title">
                  Doanh thu{" "}
                  <i
                    className="tio-help-outlined text-body ml-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Doanh thu thuần theo thời gian(tổng doanh thu trừ chiết khấu và lợi nhuận) cộng với thuế và phí vận chuyển. Được biểu diễn theo thời gian."
                  />
                </h4>
              </div>
              <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>
                  <Button>
                    Tháng {month}
                    <DownOutlined />
                  </Button>
                </a>
              </Dropdown>
            </div>
            {/* End Row */}
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="card-body">
            <div className="row">
              <div className="col-md-9 mb-5 mb-md-0">
                {/* Bar Chart */}
                {/* <div className="chartjs-custom mb-4">
                  {prevData && (
                    <>
                      {console.log("first")}
                      <canvas
                        className="js-chart"
                        style={{ height: "18rem" }}
                        data-hs-chartjs-options={`{
                    "type": "bar",
                    "data": {
                      "labels": ${JSON.stringify(chartData.label)},
                      "datasets": [{
                        "data": ${JSON.stringify(prevData)},
                        "backgroundColor": "${chartData.colorInActive}",
                        "hoverBackgroundColor": "${chartData.colorInActive}",
                        "borderColor": "${chartData.colorInActive}"
                      }
                    ]
                    },
                    "options": {
                      "scales": {
                        "yAxes": [{
                          "gridLines": {
                            "color": "#e7eaf3",
                            "drawBorder": false,
                            "zeroLineColor": "#e7eaf3"
                          },
                          "ticks": {
                            "beginAtZero": true,
                            "stepSize": ${chartData.stepSize},
                            "fontSize": 12,
                            "fontColor": "#97a4af",
                            "fontFamily": "Open Sans, sans-serif",
                            "padding": 10
                          }
                        }],
                        "xAxes": [{
                          "gridLines": {
                            "display": false,
                            "drawBorder": false
                          },
                          "ticks": {
                            "fontSize": 12,
                            "fontColor": "#97a4af",
                            "fontFamily": "Open Sans, sans-serif",
                            "padding": 5
                          },
                          "categoryPercentage": 0.5,
                          "maxBarThickness": "10"
                        }]
                      },
                      "cornerRadius": 2,
                      "tooltips": {
                        "hasIndicator": true,
                        "mode": "index",
                        "intersect": false
                      },
                      "hover": {
                        "mode": "nearest",
                        "intersect": true
                      }
                    }
                  }`}
                      />
                    </>
                  )}
                </div> */}
                <Column {...config} />
                {/* End Bar Chart */}
                {/* Legend Indicators */}
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <span
                      className="legend-indicator"
                      style={{ backgroundColor: "blue" }}
                    />{" "}
                    Doanh thu
                  </div>
                </div>
                {/* End Legend Indicators */}
              </div>
              <div className="col-md-3 column-divider-md">
                <div className="row">
                  <div className="col-sm-6 col-md-12">
                    {/* Stats */}
                    <div
                      className="d-flex justify-content-center flex-column"
                      style={{ minHeight: "10.5rem" }}
                    >
                      <h6 className="card-subtitle">Doanh thu</h6>
                      <span className="d-block display-4 text-dark mb-1 mr-3">
                        $97,458.20
                      </span>
                      <span className="d-block text-success">
                        <i className="tio-trending-up mr-1" /> $2,401.02 (3.7%)
                      </span>
                    </div>
                    {/* End Stats */}
                    <div className="d-sm-none">
                      <hr className="my-0" />
                    </div>
                    <div className="d-none d-md-block">
                      <hr className="my-0" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-12">
                    {/* Stats */}
                    <div
                      className="d-flex justify-content-center flex-column"
                      style={{ minHeight: "10.5rem" }}
                    >
                      <h6 className="card-subtitle">Đơn hàng</h6>
                      <span className="d-block display-4 text-dark mb-1 mr-3">
                        67,893
                      </span>
                      <span className="d-block text-danger">
                        <i className="tio-trending-down mr-1" /> +3,301 (1.2%)
                      </span>
                    </div>
                    {/* End Stats */}
                  </div>
                </div>
                {/* End Row */}
              </div>
            </div>
            {/* End Row */}
          </div>
          {/* End Body */}
        </div>
        {/* End Card */}
        {/* Row (Gồm 2 card: 1.Chức năng Tạo Product, Tạo Discount, ... và 2.Top list product best sales) ) */}
        <div className="row">
          <div className="col-lg-4 mb-3 mb-lg-5">
            {/* Card */}
            <a
              className="card card-hover-shadow mb-4"
              href="./ecommerce-add-product.html"
            >
              <div className="card-body">
                {/* Row */}
                <div className="media align-items-center">
                  <img
                    className="avatar avatar-xl mr-4"
                    src="assets\svg\illustrations\create.svg"
                    alt="Image Description"
                  />
                  <div className="media-body">
                    <h3 className="text-hover-primary mb-1">Sản phẩm</h3>
                    <span className="text-body">Tạo một sản phẩm mới</span>
                  </div>
                  <div className="ml-2 text-right">
                    <i className="tio-chevron-right tio-lg text-body text-hover-primary" />
                  </div>
                </div>
                {/* End Row */}
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a
              className="card card-hover-shadow mb-4"
              href="./sale-request-management.html"
            >
              <div className="card-body">
                <div className="media align-items-center">
                  <img
                    className="avatar avatar-xl mr-4"
                    src="assets\svg\illustrations\choice.svg"
                    alt="Image Description"
                  />
                  <div className="media-body">
                    <h3 className="text-hover-primary mb-1">
                      Yêu cầu bán hàng
                    </h3>
                    <span className="text-body">
                      Duyệt các yêu cầu từ khách hàng.
                    </span>
                  </div>
                  <div className="ml-2 text-right">
                    <i className="tio-chevron-right tio-lg text-body text-hover-primary" />
                  </div>
                </div>
                {/* End Row */}
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a className="card card-hover-shadow" href="#">
              <div className="card-body">
                <div className="media align-items-center">
                  <img
                    className="avatar avatar-xl mr-4"
                    src="assets\svg\illustrations\presenting.svg"
                    alt="Image Description"
                  />
                  <div className="media-body">
                    <h3 className="text-hover-primary mb-1">Giảm giá</h3>
                    <span className="text-body">Tạo một giảm giá mới</span>
                  </div>
                  <div className="ml-2 text-right">
                    <i className="tio-chevron-right tio-lg text-body text-hover-primary" />
                  </div>
                </div>
                {/* End Row */}
              </div>
            </a>
            {/* End Card */}
          </div>
          <div className="col-lg-8 mb-3 mb-lg-5">
            {/* Card */}
            <div className="card h-100">
              {/* Header */}
              <div className="card-header">
                <h4 className="card-header-title">Thương hiệu bán chạy nhất</h4>
                <a
                  className="btn btn-sm btn-ghost-secondary"
                  href="product-management.html"
                >
                  Xem tất cả
                </a>
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="card-body-height">
                {/* Table */}
                <div className="table-responsive">
                  <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Thương hiệu</th>
                        {/* <th scope="col">Change</th>
                        <th scope="col">Price</th> */}
                        <th scope="col">Đã bán</th>
                        <th scope="col">Doanh số bán hàng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {/* Media */}
                          <a
                            className="media align-items-center"
                            href="./ecommerce-product-details.html"
                          >
                            <img
                              className="avatar mr-3"
                              src="assets\img\400x400\img4.jpg"
                              alt="Image Description"
                            />
                            <div className="media-body">
                              <h5 className="text-hover-primary mb-0">Nike</h5>
                            </div>
                          </a>
                          {/* End Media */}
                        </td>
                        {/* <td><i class="tio-trending-down text-danger mr-1"></i> 72%</td>
                        <td>$65</td> */}
                        <td>7,545</td>
                        <td>
                          <h4 className="mb-0">$15,302.00</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/* Media */}
                          <a
                            className="media align-items-center"
                            href="./ecommerce-product-details.html"
                          >
                            <img
                              className="avatar mr-3"
                              src="assets\img\400x400\img26.jpg"
                              alt="Image Description"
                            />
                            <div className="media-body">
                              <h5 className="text-hover-primary mb-0">
                                Adidas
                              </h5>
                            </div>
                          </a>
                          {/* End Media */}
                        </td>
                        {/* <td><i class="tio-trending-up text-success mr-1"></i> 69%</td>
                        <td>$21</td> */}
                        <td>6,643</td>
                        <td>
                          <h4 className="mb-0">$12,492.21</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/* Media */}
                          <a
                            className="media align-items-center"
                            href="./ecommerce-product-details.html"
                          >
                            <img
                              className="avatar mr-3"
                              src="assets\img\400x400\img25.jpg"
                              alt="Image Description"
                            />
                            <div className="media-body">
                              <h5 className="text-hover-primary mb-0">Puma</h5>
                            </div>
                          </a>
                          {/* End Media */}
                        </td>
                        {/* <td><i class="tio-trending-down text-danger mr-1"></i> 65%</td>
                        <td>$37</td> */}
                        <td>5,951</td>
                        <td>
                          <h4 className="mb-0">$10,351.71</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/* Media */}
                          <a
                            className="media align-items-center"
                            href="./ecommerce-product-details.html"
                          >
                            <img
                              className="avatar mr-3"
                              src="assets\img\400x400\img6.jpg"
                              alt="Image Description"
                            />
                            <div className="media-body">
                              <h5 className="text-hover-primary mb-0">
                                Supreme
                              </h5>
                            </div>
                          </a>
                          {/* End Media */}
                        </td>
                        {/* <td><i class="tio-trending-down text-danger mr-1"></i> 53%</td>
                        <td>$65</td> */}
                        <td>5,002</td>
                        <td>
                          <h4 className="mb-0">$9,917.45</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/* Media */}
                          <a
                            className="media align-items-center"
                            href="./ecommerce-product-details.html"
                          >
                            <img
                              className="avatar mr-3"
                              src="assets\img\400x400\img3.jpg"
                              alt="Image Description"
                            />
                            <div className="media-body">
                              <h5 className="text-hover-primary mb-0">
                                Louis vuitton
                              </h5>
                            </div>
                          </a>
                          {/* End Media */}
                        </td>
                        {/* <td><i class="tio-trending-up text-success mr-1"></i> 50%</td>
                        <td>$89</td> */}
                        <td>4,714</td>
                        <td>
                          <h4 className="mb-0">$8,466.02</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/* Media */}
                          <a
                            className="media align-items-center"
                            href="./ecommerce-product-details.html"
                          >
                            <img
                              className="avatar mr-3"
                              src="assets\img\400x400\img5.jpg"
                              alt="Image Description"
                            />
                            <div className="media-body">
                              <h5 className="text-hover-primary mb-0">Gucci</h5>
                            </div>
                          </a>
                          {/* End Media */}
                        </td>
                        {/* <td><i class="tio-trending-up text-success mr-1"></i> 50%</td>
                        <td>$99</td> */}
                        <td>4,155</td>
                        <td>
                          <h4 className="mb-0">$7,715.89</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* End Table */}
              </div>
              {/* End Body */}
            </div>
            {/* End Card */}
          </div>
        </div>
        {/* End Row */}
        {/* Biểu đồ tròn, biểu diễn tổng doanh thu theo danh mục sản phẩm */}
        <div className="row gx-2 gx-lg-3">
          <div className="col-lg-6 mb-3 mb-lg-0">
            {/* Card */}
            <div className="card h-100">
              {/* Header */}
              <div className="card-header">
                <h4 className="card-header-title">
                  Tổng doanh thu{" "}
                  <i
                    className="tio-help-outlined text-body ml-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Doanh thu thuần theo danh mục hàng hóa(tổng doanh thu trừ chiết khấu và lợi nhuận) cộng với thuế và phí vận chuyển. Được biểu diễn theo loại danh mụch hàng hóa."
                  />
                </h4>
                {/* Daterangepicker */}
                <div className="d-flex justify-content-end mb-3">
                  {/* Nav */}
                  <ul
                    className="nav nav-segment"
                    id="expensesTab"
                    role="tablist"
                  >
                    <li
                      className="nav-item"
                      data-toggle="chart-doughnut"
                      data-trigger="click"
                      data-action="toggle"
                    >
                      <a
                        className="nav-link active"
                        href="javascript:;"
                        data-toggle="tab"
                      >
                        Tất cả
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      data-toggle="chart-doughnut"
                      data-datasets={1}
                      data-trigger="click"
                      data-action="toggle"
                    >
                      <a
                        className="nav-link"
                        href="javascript:;"
                        data-toggle="tab"
                      >
                        Tháng này
                      </a>
                    </li>
                  </ul>
                  {/* End Nav */}
                </div>
                {/* End Daterangepicker */}
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="card-body">
                {/* Pie Chart */}
                <div
                  className="chartjs-custom mb-3 mb-sm-5"
                  style={{ overflow: "unset" }}
                >
                  {/* <canvas
                    className="js-chart"
                    style={{ height: "18rem" }}
                    id="updatingDoughnutChart"
                    data-hs-chartjs-options={`{
                    "type": "doughnut",
                    "data": {
                      "labels": ${JSON.stringify(doughnutChartData.label)},
                      "datasets": [{
                        "backgroundColor": ${JSON.stringify(
                          doughnutChartData.backgroundColor
                        )},
                        "data": ${JSON.stringify(doughnutChartData.data)},
                        "borderWidth": 5,
                        "hoverBorderColor": "#fff"
                      }]
                    },
                    "options": {
                      "cutoutPercentage": ${doughnutChartData.cutoutPercentage},
                      "tooltips": {
                        "postfix": "${doughnutChartData.postfix}",
                        "hasIndicator": true,
                        "mode": "index",
                        "intersect": false
                      },
                      "hover": {
                        "mode": "nearest",
                        "intersect": true
                      }
                    }
                  }`}
                  /> */}
                  <Doughnut data={newChartData} />
                </div>
                {/* End Pie Chart */}
                {/* Legend Indicators */}
                <div className="row justify-content-center">
                  {doughnutChartData.data.map((item, index) => (
                    <div
                      className="col-auto mb-3 mb-sm-0"
                      key={`doughnutChartData-${index}`}
                    >
                      <span className="card-title h4">{item}</span>
                      <span
                        className="legend-indicator"
                        style={{
                          backgroundColor:
                            doughnutChartData.backgroundColor[index],
                        }}
                      />
                      {doughnutChartData.title[index]}
                    </div>
                  ))}
                  {/* <div className="col-auto mb-3 mb-sm-0">
                    <span className="card-title h4">$2,332.00</span>
                    <span className="legend-indicator bg-primary" />Giày
                  </div>
                  <div className="col-auto mb-3 mb-sm-0">
                    <span className="card-title h4">$10,452.00</span>
                    <span className="legend-indicator bg-info" /> Áo
                  </div>
                  <div className="col-auto">
                    <span className="card-title h4">$56,856.00</span>
                    <span className="legend-indicator" /> Sản phẩm khác
                  </div> */}
                </div>
                {/* End Legend Indicators */}
              </div>
              {/* End Body */}
            </div>
            {/* End Card */}
          </div>
          <div className="col-lg-6">
            {/* Card */}
            <div className="card h-100">
              {/* Header */}
              <div className="card-header">
                <h5 className="card-header-title">Báo cáo tổng quan</h5>
                {/* Unfold */}
                <div className="hs-unfold">
                  <a
                    className="js-hs-unfold-invoker btn btn-icon btn-sm btn-ghost-secondary rounded-circle"
                    href="javascript:;"
                    data-hs-unfold-options='{
                       "target": "#reportsOverviewDropdown1",
                       "type": "css-animation"
                     }'
                  >
                    <i className="tio-more-vertical" />
                  </a>
                  <div
                    id="reportsOverviewDropdown1"
                    className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1"
                  >
                    <span className="dropdown-header">Cài đặt</span>
                    <a className="dropdown-item" href="#">
                      <i className="tio-share dropdown-item-icon" /> Chia sẻ
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="tio-download-to dropdown-item-icon" /> Tải
                      về máy
                    </a>
                  </div>
                </div>
                {/* End Unfold */}
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="card-body">
                <span className="h1 d-block mb-4">$7,431.14 USD</span>
                {/* Progress */}
                <div className="progress rounded-pill mb-2">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Gross value"
                  />
                  <div
                    className="progress-bar opacity"
                    role="progressbar"
                    style={{ width: "33%" }}
                    aria-valuenow={33}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Net volume from sales"
                  />
                  <div
                    className="progress-bar opacity-xs"
                    role="progressbar"
                    style={{ width: "9%" }}
                    aria-valuenow={9}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="New volume from sales"
                  />
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <span>0%</span>
                  <span>100%</span>
                </div>
                {/* End Progress */}
                {/* Table */}
                <div className="table-responsive">
                  <table className="table table-lg table-nowrap card-table mb-0">
                    <tbody>
                      <tr>
                        <th scope="row">
                          <span className="legend-indicator bg-primary" />
                          Tổng doanh thu
                        </th>
                        <td>
                          <span className="badge badge-soft-success">
                            $3,500.71
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <span className="legend-indicator bg-primary opacity" />
                          Doanh thu từ việc bán giày
                        </th>
                        <td>
                          <span className="badge badge-soft-primary">
                            $2,980.45
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <span className="legend-indicator bg-primary opacity-xs" />
                          Doanh thu từ việc bán áo
                        </th>
                        <td>
                          <span className="badge badge-soft-info">$950.00</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <span className="legend-indicator" />
                          Doanh thu từ việc bán mặt hàng khác
                        </th>
                        <td>
                          <span className="badge badge-soft-success">
                            $1,950.00
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* End Table */}
              </div>
              {/* End Body */}
            </div>
            {/* End Card */}
          </div>
        </div>
        {/* End Biểu đồ tròn */}
      </div>
      {/* End Content */}
      {/* Footer */}
      <div className="footer">
        {/* <div class="row justify-content-between align-items-center">
        <div class="col">
          <p class="font-size-sm mb-0">&copy; Front. <span class="d-none d-sm-inline-block">2020 Htmlstream.</span></p>
        </div>
        <div class="col-auto">
          <div class="d-flex justify-content-end"> */}
        {/* List Dot */}
        {/* <ul class="list-inline list-separator">
              <li class="list-inline-item">
                <a class="list-separator-link" href="#">FAQ</a>
              </li>

              <li class="list-inline-item">
                <a class="list-separator-link" href="#">License</a>
              </li>

              <li class="list-inline-item"> */}
        {/* Keyboard Shortcuts Toggle */}
        {/* <div class="hs-unfold">
                  <a class="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="javascript:;"
                    data-hs-unfold-options='{
                              "target": "#keyboardShortcutsSidebar",
                              "type": "css-animation",
                              "animationIn": "fadeInRight",
                              "animationOut": "fadeOutRight",
                              "hasOverlay": true,
                              "smartPositionOff": true
                             }'>
                    <i class="tio-command-key"></i>
                  </a>
                </div> */}
        {/* End Keyboard Shortcuts Toggle */}
        {/* </li>
            </ul> */}
        {/* End List Dot */}
        {/* </div>
        </div>
      </div> */}
      </div>
      {/* End Footer */}
    </main>
  );
}

export default Homepage;
