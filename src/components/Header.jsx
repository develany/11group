import { Link } from "react-router-dom";
import { Breadcrumb } from 'antd';

const Header = () => {
  const userId= localStorage.getItem('userId')
  const deslogar = () =>{
    localStorage.removeItem('logado');

    window.location.reload()
  }
  return (
<Breadcrumb
    items={[
      {
        title: <Link to={`/users/${userId}`} >Perfil</Link>,
      },
      {
        title: <Link to="/users"> Usuários </Link>,
      },
      {
        title: <Link to="/" onClick={deslogar}>sair</Link>,
      },


    ]}
  />
  )
}

export default Header