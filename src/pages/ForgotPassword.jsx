import {
  Button,

  Form,
  Input,
} from 'antd';
import { API } from '../services/Api';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [user, setUser] = useState(null);
  async function autenticar(values) {
    try {
      const response = await API.post("/auth/forgot_password",
        values);

      setUser(response.data.user);

      window.location.href = "/REDEFINIR";
    } catch (error) {
      alert(error.response.data.error)
    }
  }
  const [form] = Form.useForm();


  return (
    <div id="formulario">
      <h1>REDEFENIR SUA SENHA?</h1>
      {user && <h2>Bem vindo, {user.name}</h2>}
      <Form
        method="POST" action=""
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
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'Não é um email valido!',
            },
            {
              required: true,
              message: 'Por favor coloque um email válido',
            },
          ]}
        >
          <Input
            placeholder="Digite seu email" />
        </Form.Item>


        <Button type="primary" style={{ backgroundColor: '#95a034' }}
          htmlType="submit" >
          Enviar Email de Redefinição
        </Button>
        <br /> <Link id="linksenha" to="/"> Voltar </Link>
      </Form>
    </div>
  );
}

export default ForgotPassword;