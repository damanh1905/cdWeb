import React from 'react';
import 'antd/dist/antd.css';
import './login.scss'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
        <div className='container-form'>
              <h2>Welcome to Organi</h2>
              <div className='container-login'>
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
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or       <Link to={"/register"} > Register now</Link>
      </Form.Item>
    </Form>
            <div className='container-right-login'>
                  <div className='container-button'>
                  <button className='login-with-facebook'>
                  <i className="fa-brands fa-facebook-f"></i>
                          Facebook
                  </button>
                  <button className='login-with-google'>
                  <i className="fa-brands fa-google"></i>
                          Google
                  </button>
                  </div>
            </div>
              </div>
             
        </div>
  );
};

export default Login;