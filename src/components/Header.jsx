import { Link } from "react-router-dom";
import { Breadcrumb } from 'antd';
import "./Card.css";

const Header = () => {
  const userId= localStorage.getItem('userId')
  const deslogar = () =>{
    localStorage.removeItem('logado');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
  }
  return (
    
    <div id="header">
<Breadcrumb
    items={[
      {
        title: <Link id="linkHeader" to={`/users/${userId}`} > Meu Perfil </Link>,
      },
      {
        title: <Link id="linkHeader" to="/users"> Usuários 11Link </Link>,
      },
      {
        title: <Link id="linkHeader" to="/" onClick={deslogar}>SAIR</Link>,
      },
    ]}
  />
  </div>
  )
}

export default Header