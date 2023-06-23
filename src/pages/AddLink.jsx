import {Button,
    Form,
    Input,
  } from 'antd';
import { API } from '../services/Api';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
  
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



const AddLink = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    async function autenticar(values) {
      try {
        const response = await API.post(`/users/${id}/links`,
          values);
    
        localStorage.setItem("logado", true);
    
        setUser(response.data.user);
    
      } catch (error) {
        alert(error.response.data.error)
      }
    }
      const [form] = Form.useForm();
      
      
      return (
          <div id="formulario">
              <h1>Adicionar Link</h1>
              {user && <h2>Bem vindo, {user.name}</h2>}
        <Form
        method="POST" action=""
          {...formItemLayout}
          form={form}
          name="register"
          onFinish = {autenticar}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Form.Item
          name="title"
          label="Nome do Link"
          tooltip="Linkedin, GitHub or other..."
          rules={[
            {
              required: true,
              message: 'please enter the name of the link',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Nome do Link"
          tooltip="Linkedin, GitHub or other..."
          rules={[
            {
              required: true,
              message: 'please enter the name of the link',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary">
              Register
            </Button>
            Or <Link to="/login"> Login </Link>
          </Form.Item>
        </Form>
        </div>
      );
}

export default AddLink