import {
  Button,
  Form,
  Input,
} from 'antd';
import { API } from '../../services/Api';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";

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


const Cadastro = () => {
  const [user, setUser] = useState(null);
  async function autenticar(values) {
    try {
      const response = await API.post("/users",
        values);

      localStorage.setItem("logado", true);

      setUser(response.data.user);

      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.error)
    }
  }
  const [form] = Form.useForm();


  return (
    <>
      <div id="img"><img src={Logo} alt="Paisagem" width={150} /></div>

      <div id="formulario">
        <h1>CADASTRO</h1>
        {user && <h2>Bem vindo, {user.name}</h2>}
        <Form
          method="POST" action=""
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={autenticar}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
          }}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="Nome"
            tooltip="Como você quer ser chamado?"
            rules={[
              {
                required: true,
                message: 'Insira seu Nome!',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: 'email',
                message: 'Insira um email válido!',
              },
              {
                required: true,
                message: 'Digite seu email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Senha"
            rules={[
              {
                required: true,
                message: 'Escolha uma senha!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: "#222d97" }}>
              Cadastre-se
            </Button>
            ou <Link to="/" style={{ color: "#222d97" }}> Login </Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Cadastro;