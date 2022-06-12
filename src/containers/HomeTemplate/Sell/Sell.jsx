import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import "./sell.scss";
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Row,
  Upload,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
import { doGet, doPost } from "../../../utils/api/api";
import { debounce } from "lodash";
import Password from "antd/lib/input/Password";
import SearchProduct from "../../../components/Layout/Search/SearchProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
const { Option } = Select;
const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const layout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Sell = () => {
  const [disable, setDisable] = useState(true);
  const [disableverify, setDisableverify] = useState(false);
  let navigate = useNavigate();

  const [form] = Form.useForm();
  const handleCheckUser = () => {
    return doGet(
      `auth/checkUserName?username=${form.getFieldValue("username")}`
    );
  };
  const handleCheckCode = () => {
    return doPost("auth/verifyEmail", {
      verifyCodeEmail: parseInt(form.getFieldValue("captcha")),
    });
  };
  const handleSubmitEmail = async () => {
    if (form.getFieldValue("username").length > 6) {
      const { data } = await doPost("auth/registerEmail", {
        name: form.getFieldValue("username"),
        email: form.getFieldValue("email"),
      });
      console.log(data.status);
    } else {
      console.log("user lớn hơn 6 nha");
    }
  };

  console.log("render2");

  const onFinish = async (values) => {
    const { password, phone, gender, username } = values;
    const { data } = await doPost("auth/register", {
      userName: username,
      password: password,
      phone: phone,
      gender: gender,
    });
    if (data.status === 200) {
      navigate("/login");
    } else {
      window.location.reload();
    }

    console.log("Received values of form: ", data.status);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
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
                <h2>Sell Product</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Sell Product</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-sell">
        <div className="container-sell-form">
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "email"]}
              label="Email Seller"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name={["user", "price"]}
              label="Price"
              rules={[
                {
                  required: true,
                  type: "number",
                  min: 0,
                  max: 10000000,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name="Size"
              label="Size"
              rules={[
                {
                  required: true,
                  message: "Please pick an size!",
                },
              ]}
            >
              <Radio.Group>
                <Radio.Button value="s">Size S</Radio.Button>
                <Radio.Button value="m">Size M</Radio.Button>
                <Radio.Button value="l">Size L</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item name={["user", "brand"]} label="Brand">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "description"]} label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name={["user", "note"]} label="Note">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button > <FontAwesomeIcon icon={faUpload} style={{marginRight:"10px"}}/> Click to upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Sell;
