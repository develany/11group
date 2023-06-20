import { Link } from "react-router-dom"
import ListUsers from "./Listusers"
import { Button } from "antd/es/radio"

const Home = () => {
  return (
    <div id="formulario" >
        <h1>Bem Vindo!</h1>
        <div className="menu">
        <ListUsers/>
        </div>
        <Link to="/login"> <Button type="primary">Login</Button> </Link>
        
    </div>
  )
}

export default Home