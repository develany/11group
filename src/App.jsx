import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <>
         <Route path='/' element = {<Login></Login>}></Route>
         <Route path="/cadastro" element={<Cadastro />} />
        </>
      </Routes>
    </>
  );
}

export default App;
