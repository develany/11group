import Routes from "./Routes";
import { isLogado } from "./auth";
import Header from "./components/Header";

function App() {
  return (
    <>
    {console.log(isLogado())}
    {isLogado() && <Header/>}
     <Routes/>
    </>
  );
}

export default App;
