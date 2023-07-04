import { Routes as Rotas, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro";
import ListUsers from "./pages/Listusers";
import NotFound from "./pages/NotFound";
import { isLogado } from "./auth";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import REDEFENIR from "./pages/RedefenirSenha";
import AddLink from "./pages/AddLink";

function Routes() {
    return (
        <Rotas>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/novasenha" element={<ForgotPassword/>} />
            <Route path="/redefinir" element={<REDEFENIR/>} />
            <Route path="/" element={<Login/>}/>
            {isLogado ? (
            <>
            <Route path="*" element={<NotFound/>}/>
            <Route path='/users' element = {<ListUsers/>} /> 
            <Route path="/users/:id" element={<Home/>} />
            <Route path="/users/:id/links" element={<AddLink/>} />
            </>
            ) : (
                <Route path="*" element={<Login/>}/>
            )}

        </Rotas>
        
    )
}




export default Routes;