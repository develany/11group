import { Link } from "react-router-dom";
import { Breadcrumb } from 'antd';
import "./Card.css";

const Header = () => {
  const userId= localStorage.getItem('userId')
  const deslogar = () =>{
    localStorage.removeItem('logado');

    window.location.reload()
  }
  return (
    <div id="header">
<Breadcrumb
    items={[
      {
        title: <Link to={`/users/${userId}`} > Meu Perfil </Link>,
      },
      {
        title: <Link to="/users"> Usuários 11Link </Link>,
      },
      {
        title: <Link to="/" onClick={deslogar}>SAIR</Link>,
      },
    ]}
  />
  </div>
  )
}

export default Header