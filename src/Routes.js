import { Routes as Rotas, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro";
import Termo from "./pages/Termo";
import PerfilUser from "./pages/PerfilUsers";
import ListUsers from "./pages/Listusers";
import NotFound from "./pages/NotFound";
import { isLogado } from "./auth";
import Logado from "./pages/Logado";
import Login from "./pages/Login";
import Home from "./pages/Home";
function Routes() {
    return (
        <Rotas>
            <Route path="/home" element={<Home/>}/>
            
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/termo" element={<Termo/>} />
            <Route path="/login" element={<Login/>}/>
            {isLogado ? (
            <>
            <Route path="/" element={<Logado/>}/>
            <Route path='/users' element = {<ListUsers/>} /> 
            <Route path="/users/:id" element={<PerfilUser/>} />
            <Route path="*" element={<NotFound/>}/>
            </>
            ) : (
                <Route path="*" element={<Home/>}/>
            )}
        </Rotas>
        
    )
}


export default Routes;