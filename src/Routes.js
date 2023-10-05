import { Routes as Rotas, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro/Cadastro";
import ListUsers from "./pages/Listusers";
import NotFound from "./pages/NotFound";
import { isLogado } from "./auth";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import REDEFENIR from "./pages/RedefinirSenha/RedefenirSenha";
import AddLink from "./pages/AddLink";

function Routes() {
    return (
        <Rotas>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/novasenha" element={<ForgotPassword />} />
            <Route path="/redefinir" element={<REDEFENIR />} />
            <Route path="/" element={<Login />} />
            {isLogado ? (
                <>
                    <Route path="*" element={<NotFound />} />
                    <Route path='/users' element={<ListUsers />} />
                    <Route path="/users/:id" element={<Home />} />
                    <Route path="/users/:id/links" element={<AddLink />} />
                </>
            ) : (
                <Route path="*" element={<Login />} />
            )}

        </Rotas>

    )
}




export default Routes;