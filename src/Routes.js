import Login from "./pages/Login";
import { Routes as Rotas, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro";
import Termo from "./pages/Termo";
import PerfilUser from "./pages/PerfilUsers";
import ListUsers from "./pages/Listusers";
import CreateUser from "./pages/CreateUser/CreateUser";
import NotFound from "./pages/NotFound";
import { isLogado } from "./auth";
import Logado from "./pages/Logado";
function Routes() {
    return (
        <Rotas>
            <Route path='/' element = {<ListUsers/>} /> 
            <Route path="/users/:id" element={<PerfilUser/>} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/Create" element={<CreateUser/>}/>
            <Route path="/termo" element={<Termo/>} />
            {isLogado ? (
            <>
            <Route path="/logado" element={<Logado/>}/>
            <Route path="*" element={<NotFound/>}/>
            </>
            ) : (
                <Route path="/login" element={<Login/>}/>
            )}
        </Rotas>
        
    )
}


export default Routes;