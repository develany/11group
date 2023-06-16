import { Routes as Rotas, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro";
import Termo from "./pages/Termo";
import PerfilUser from "./pages/PerfilUsers";
import ListUsers from "./pages/Listusers";
import CreateUser from "./pages/CreateUser/CreateUser";
import NotFound from "./pages/NotFound";
import { isLogado } from "./auth";
import Logado from "./pages/Logado";
import Login2 from "./pages/Login2";
import Login from "./pages/Login";
function Routes() {
    return (
        <Rotas>
            <Route path='/users' element = {<ListUsers/>} /> 
            <Route path="/users/:id" element={<PerfilUser/>} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/Create" element={<CreateUser/>}/>
            <Route path="/termo" element={<Termo/>} />
            {isLogado ? (
            <>
            <Route path="/" element={<Logado/>}/>
            <Route path="*" element={<NotFound/>}/>
            </>
            ) : (
                <Route path="*" element={<Login/>}/>
            )}
        </Rotas>
        
    )
}


export default Routes;