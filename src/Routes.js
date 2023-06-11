import Login from "./pages/Login";
import { Routes as Rotas, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro";
import Termo from "./pages/Termo";
import PerfilUser from "./pages/PerfilUsers";
function Routes() {
    return (
        <Rotas>
            <Route path='/' element = {<Login/>} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/termo" element={<Termo/>} />
            <Route path="/perfil" element={<PerfilUser/>} />
        </Rotas>
    )
}


export default Routes;