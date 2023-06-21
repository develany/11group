import Login from "./pages/Login";
import { Routes as Rotas, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro";
import Termo from "./pages/Termo";
import PerfilUser from "./pages/PerfilUsers";
<<<<<<< Updated upstream
=======
import ListUsers from "./pages/Listusers";
import NotFound from "./pages/NotFound";
import { isLogado } from "./auth";
import Logado from "./pages/Logado";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import REDEFENIR from "./pages/RedefenirSenha";
>>>>>>> Stashed changes
function Routes() {
    return (
        <Rotas>
            <Route path='/' element = {<Login/>} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/termo" element={<Termo/>} />
<<<<<<< Updated upstream
            <Route path="/perfil" element={<PerfilUser/>} />
=======
            <Route path="/novasenha" element={<ForgotPassword/>} />
            <Route path="/redefinir" element={<REDEFENIR/>} />
            {isLogado ? (
            <>
            <Route path="/" element={<Logado/>}/>
            <Route path="*" element={<NotFound/>}/>
            </>
            ) : (
                <Route path="*" element={<Login/>}/>
            )}
>>>>>>> Stashed changes
        </Rotas>
    )
}


export default Routes;