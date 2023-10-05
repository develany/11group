import { Link, Navigate } from "react-router-dom";
import { Breadcrumb } from 'antd';
import "./Card.css";
import Logo from "../assets/logo.png";


const Header = () => {
  const userId = localStorage.getItem('userId')
  const meuPerfil = () => {
    Navigate(`/users/${userId}`);
  }

  const deslogar = () => {
    localStorage.removeItem('logado');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    Navigate('/');
  }
  return (

    <div id="header" style={{ backgroundColor: '#c8c9cf', borderRadius: '5px', padding: '5px', color: "#000003", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div id="img">
        <img src={Logo} alt="Paisagem" width={100} style={{ alignSelf: 'flex-start', marginLeft: "5px" }} />
      </div>

      <Breadcrumb style={{ textDecoration: 'none', fontSize: '1em', color: "#000", marginRight: "10px", marginLeft: "5px" }}
        items={[
          {
            title: <Link id="linkHeader" to="/users" style={{ color: "#000" }}> Usuários 11Link </Link>,
          },
          {
            title: <Link id="linkHeader" to={`/users/${userId}`} onClick={meuPerfil} style={{ color: "#000" }}> Meu Perfil </Link>,
          },
          {
            title: <Link id="linkHeader" to="/" onClick={deslogar} style={{ color: "#000" }}>SAIR</Link>,
          },
        ]}
      />
    </div>
  )
}

export default Header