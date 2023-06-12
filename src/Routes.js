import Login from "./pages/Login";
import { Routes as Rotas, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro";
import Termo from "./pages/Termo";
import PerfilUser from "./pages/PerfilUsers";
import ListUsers from "./pages/Listusers";
import CreateUser from "./pages/CreateUser/CreateUser";
function Routes() {
    return (
        <Rotas>
            <Route path='/' element = {<Login/>} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/termo" element={<Termo/>} />
            <Route path="/users/:id" element={<PerfilUser/>} />
            <Route path="/users" element={<ListUsers/>}/>
            <Route path="/Create" element={<CreateUser/>}/>
        </Rotas>
    )
}


export default Routes;