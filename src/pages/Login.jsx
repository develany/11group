import {  useState } from "react";
import { API } from "../services/Api";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import "./login.css";
const Login = () => {
  
  const [user, setUser] = useState(null);

  async function autenticar(values) {
    try {
      const response = await API.post("/auth/login",
        values);
      localStorage.setItem("logado", true);
      localStorage.setItem("userId", response.data.user.id);
      setUser(response.data.user);

      window.location.href = `/users/${response.data.user.id}`;
    } catch (error) {
      alert(error.response.data.error)
    }
  }


  return (
    <div id="formulario">
    <h1>Faça o Login</h1>

      {user && <h2>Bem vindo, {user.name}</h2>}
    <Form method="POST" action=""
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={autenticar}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input type="email"
          id="email"
          name="email" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
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
          id="password"
          name="password"
          placeholder="Password"
        
        />
      </Form.Item>
      <Form.Item>
        <Link to="/novasenha">Forgot password</Link>      
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/cadastro"> register now! </Link>
      </Form.Item>
    </Form>
    <Link to="/home"> Home </Link>
    </div>
  );
};
export default Login;
