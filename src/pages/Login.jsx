import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import "./login.css";


const Login = () => {
<<<<<<< Updated upstream
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
      return (
        <div id='formulario'>
          <h1>Bem Vindo!</h1>
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
    
           {//<a className="login-form-forgot" href="#">
              //Forgot password
            //</a>
          }
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href='/cadastro'>register</a>  
            
          </Form.Item>
        </Form>
        </div>
        );
=======
  
  const [user, setUser] = useState(null);

  async function autenticar(values) {
    try {
      const response = await API.post("/auth/login",
        values);

      localStorage.setItem("logado", true);

      setUser(response.data.user);

      window.location.href = "/";
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
        <Link to="/novasenha">Esqueceu a senha</Link>      
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
>>>>>>> Stashed changes
};



export default Login
