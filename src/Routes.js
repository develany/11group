import Login from "./pages/Login";
import { Routes as Rotas, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro";
function Routes() {
    return (
        <Rotas>
            <Route path='/' element = {<Login/>} />
            <Route path="/cadastro" element={<Cadastro />} />
            </Rotas>
    )
}


export default Routes;