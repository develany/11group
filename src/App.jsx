import Routes from "./Routes";
import { isLogado } from "./auth";
import Header from "./components/Header";

function App() {
  return (
    <>
    {isLogado && <Header/>}
     <Routes/>
    </>
  );
}

export default App;
