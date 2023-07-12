import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div id="formulario">
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar para login</Link>
    </div>
  );
}

export default NotFound;
