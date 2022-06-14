import React, { useState } from "react";
import "antd/dist/antd.css";
import "./login.scss";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { doGet, doPost } from "../../../utils/api/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import instance from "../../../utils/api/Axios";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

// const responseFacebook = (response) => {
//   console.log(response);
// };

const Login = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  const responseGoogle = async (response) => {
    try {
      const { data } = await doGet(
        `auth/checkLoginGG?username=${response.profileObj.name}&email=${response.profileObj.email}`
      );
      // console.log(data["username"]);
      console.log(data);

      localStorage.setItem("username", data["username"]);
      Cookies.set("token", data["token"], { expires: 1, path: "/" });
      Cookies.set("refreshToken", data["refreshToken"], {
        expires: 7,
        path: "/",
      });
      // console.log( Cookies.get('token'));
      instance.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
        "token"
      )}`;
      navigate("/");
    } catch (error) {
      console.log(error);
      setErr(true);
      navigate("/login");
    }
  };
  const onFinish = async ({ username, password }) => {
    try {
      const { data } = await doPost("auth/login", { username, password });
      console.log(data["username"]);
      localStorage.setItem("username", data["username"]);
      Cookies.set("token", data["token"], { expires: 1, path: "/" });
      Cookies.set("refreshToken", data["refreshToken"], {
        expires: 7,
        path: "/",
      });
      // console.log( Cookies.get('token'));
      instance.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
        "token"
      )}`;
      navigate("/");
    } catch (error) {
      console.log(error);
      setErr(true);
      navigate("/login");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container-form">
      <h2>Welcome to Organi</h2>
      <div className="container-login">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
              {
                min: 3,
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to={"/register"}> Register now</Link>
          </Form.Item>
        </Form>
        <div className="container-right-login">
          <div className="container-button">
            {/* <button className="login-with-facebook">
              <i className="fa-brands fa-facebook-f"></i>
              Facebook
            </button> */}
            {/* <FacebookLogin
              appId="1088597931155576"
              autoLoad={true}
              fields="name,email,picture"
              // onClick={componentClicked}
              callback={responseFacebook}
            /> */}

            {/* <button className="login-with-google">
              <i className="fa-brands fa-google"></i>
              Google
            </button> */}
            <GoogleLogin
              clientId="176687431821-4q6tbvv2rn86p6rtvp4919tljbnofq3v.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
      {err && <h5> UserName or password wrong</h5>}
    </div>
  );
};

export default Login;
