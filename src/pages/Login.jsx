import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import "./login.css";
import { useState } from "react";
import { API } from "../services/Api";

const Login = () => {
    
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

  
  const [user, setUser] = useState(null);
  async function autenticar(evento) {
    try {
      evento.preventDefault();

      const dados = { email, password };

      const response = await API.post("/auth/login",
        dados
      );

      localStorage.setItem("logado", true);
      setUser(response.data.user);
      

      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.error)
    }
  }
      return (
        <div id='formulario'>
          <h1>Bem Vindo!</h1>
          {user && <h2>Bem vindo, {user.name}</h2>}
        <Form
           onSubmit={autenticar} method="POST" action=""
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
            <Input 
            type="email"
            id="email"
            name="email"
            onChange={(evento) => setEmail(evento.target.value)}
            prefix={<UserOutlined className="site-form-item-icon" 
            />} placeholder="Username" />
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
            id="password"
            name="password"
            onChange={(evento) => setPassword(evento.target.value)}
              prefix={<LockOutlined className="site-form-item-icon" 
              />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
    
           {//<a className="login-form-forgot" href="#">
              //Forgot password
            //</a>
          }
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" >
              Log in
            </Button>
            Or <a href='/cadastro'>register</a>  
            
          </Form.Item>
        </Form>
        </div>
        );
};



export default Login
