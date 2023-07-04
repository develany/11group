import { useState } from "react";
import { API } from "../services/Api";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import "./login.css";
import Logo from "../assets/logo.png";
const Login = () => {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState();

  async function autenticar(values) {
    try {
      const response = await API.post("/auth/login",
        values);
      localStorage.setItem("logado", true);
      localStorage.setItem("userId", response.data.user.id);
      localStorage.setItem("token", response.data.token);

      setUser(response.data.user);
      setToken(response.data.token)
      console.log(token);
      window.location.href = `/users/${response.data.user.id}`;
    } catch (error) {
      alert(error.response.data.error)
    }
  }


  return (
    <>
      <div id="img"><img src={Logo} alt="Paisagem" width={200} /></div>
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
                message: 'Por favor digite seu e-mail!',
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
                message: 'Digite sua senha!',
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
            <Button type="primary" style={{ backgroundColor: '#95a034' }} htmlType="submit" className="login-form-button">
              ENTRAR
            </Button>
            <Form.Item>
            </Form.Item>
            <Link id="linksenha" to="/novasenha">Esqueceu sua senha? </Link>
            ou <Link id="linksenha" to="/cadastro"> Registre-se agora! </Link>
          </Form.Item>
        </Form>


      </div>
    </>
  );
};
export default Login;
