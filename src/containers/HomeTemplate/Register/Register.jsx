import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import "./register.scss";
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
import { doGet, doPost } from "../../../utils/api/api";
import { debounce } from "lodash";
import Password from "antd/lib/input/Password";
const { Option } = Select;
const formItemLayout = {
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

const Register = () => {
  const [disable, setDisable] = useState(true);
  const [disableverify, setDisableverify] = useState(false);
  let navigate = useNavigate();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await doGet(`auth/checkEmail?email=${email}`);

  //       setCheckEmail(true);
  //       // console.log(checkEmail);
  //     } catch (e) {
  //       setCheckEmail(false);
  //       // console.log("aaaaaaa");
  //     }
  //   })();
  //   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (email?.match(mailformat)) {
  //     setdisable(false);
  //   } else {
  //     setdisable(true);
  //   }
  // }, [email]);
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
      const data = await doPost("auth/registerEmail", {
        name: form.getFieldValue("username"),
        email: form.getFieldValue("email"),
      });
      console.log(data);
    } else {
      console.log("user lớn hơn 6 nha");
    }
  };

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
    <div className="container-register">
      <h2>Register to Organi</h2>
      <div className="container-register-form">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            label="username"
            rules={[
              {
                type: "text",
              },
              {
                min: 6,
              },
              {
                required: true,
                message: "Please input your username!",
              },
              {
                async validator(_, value) {
                  const data = await handleCheckUser();
                  // const data1 = _.debounce(handleCheckUser(), 2000);
                  // const data = debounce(() => {
                  //   const data = handleCheckUser();
                  //   if (data.data.status === 404) {
                  //     console.log("user is already taken!");
                  //     return Promise.reject(new Error("user is already taken!"));
                  //   }
                  //   return Promise.resolve();
                  // }, 2000);
                  // console.log("data: ", data);
                  if (data.data.status === 404 && disableverify === false) {
                    console.log(disableverify);
                    console.log("user is already taken!");
                    return Promise.reject(new Error("user is already taken!"));
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input disabled={disableverify} />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },

              ({ getFieldValue }) => ({
                validator(_, value) {
                  var mailformat =
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                  if (
                    form.getFieldValue("username") !== undefined &&
                    getFieldValue("username").length > 6 &&
                    value.match(mailformat)
                  ) {
                    setDisable(false);
                    // console.log(typeof getFieldValue("username").length);
                    return Promise.resolve();
                  }
                  setDisable(true);
                  return Promise.reject(
                    new Error("username must be at least 6 characters")
                  );
                },
              }),
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Code">
            <Row gutter={8}>
              <Col span={15}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Please input the verify code you got!",
                    },
                    {
                      async validator(_, value) {
                        const data = await handleCheckCode();
                        // console.log("data: ", data);
                        if (
                          data.data.status === 404 &&
                          disableverify === false
                        ) {
                          return Promise.reject(
                            new Error("VeriCode is incorrect or already used!")
                          );
                        }
                        setDisableverify(true);
                        console.log("user is already taken!");
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input disabled={disableverify} />
                </Form.Item>
              </Col>
              <Col span={7}>
                <Button onClick={handleSubmitEmail} disabled={disable}>
                  Get verify
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 8,
                message: "Minimum 8 characters",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                min: 10,
                message: "phone must have at  10 numbers",
              },
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please select gender!",
              },
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
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
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;