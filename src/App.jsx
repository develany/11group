import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import { Route, Routes} from "react-router-dom";
import Termo from "./pages/Termo";

function App() {
  return (
    <>
      <Routes>
        <>
         <Route path='/' element = {<Login></Login>}></Route>
         <Route path="/cadastro" element={<Cadastro />} />
         <Route path="/termo" element={<Termo/>} />
        </>
      </Routes>
    </>
  );
}

export default App;
