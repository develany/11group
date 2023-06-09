import { Link, Navigate } from "react-router-dom";
import { Breadcrumb } from 'antd';
import "./Card.css";

const Header = () => {
  const userId= localStorage.getItem('userId')
  const meuPerfil = ()=> {
    Navigate(`/users/${userId}`);
  }
  
  const deslogar = () =>{
    localStorage.removeItem('logado');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    Navigate('/');    
  }
  return (
    
    <div id="header">
<Breadcrumb style={{font: 'normal bold 20px/1.5 Inter, sans-serif'}}
    items={[
      {
        title: <Link id="linkHeader" to="/users"> Usuários 11Link </Link>,
      },
      {
        title: <Link id="linkHeader" to={`/users/${userId}`} onClick={meuPerfil}> Meu Perfil </Link>,
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