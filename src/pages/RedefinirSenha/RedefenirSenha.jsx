import { Button, Form, Input } from 'antd';
import { API } from '../../services/Api';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const REDEFENIR = () => {
  const [user, setUser] = useState(null);
  async function autenticar(values) {
    try {
      const response = await API.post("/auth/reset_password",
        values);



      setUser(response.data.user);

      window.location.href = "/login";
    } catch (error) {
      alert(error.response.data.error)
    }
  }
  const [form] = Form.useForm();


  return (
    <div id="formulario">
      <h1>REDEFINIR SUA SENHA</h1>
      <h2 id='linkTexto' style={{
        maxWidth: 400,
      }}>Por favor preencha com os dados recebidos no e-mail e a nova senha</h2>
      {user && <h2>Bem vindo, {user.name}</h2>}
      <Form
        method="POST" action="token"
        form={form}
        name="register"
        onFinish={autenticar}

        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: 'email',
            },
            {
              required: true,
              message: '!',
            },
          ]}
        >
          <Input
            placeholder="Digite seu email" />
        </Form.Item>
        <Form.Item
          name="token"
          label="Token"
          rules={[
            {
              type: 'string',
            },
            {
              required: true,
              message: 'Por favor digite o token!',
            },
          ]}
        >
          <Input
            placeholder="Digite o token" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Nova Senha"
          rules={[
            {
              type: 'string',
            },
            {
              required: true,
              message: 'Por favor digite sua nova senha!',
            },
          ]}
        >
          <Input
            placeholder="Digite a nova senha" />
        </Form.Item>

        <Button type="primary" style={{ backgroundColor: '#222d97' }}
          htmlType="submit">
          Enviar
        </Button>
        <br />
        <Link id="linksenha" to="/"> Voltar </Link>
      </Form>
    </div>
  );
}

export default REDEFENIR;