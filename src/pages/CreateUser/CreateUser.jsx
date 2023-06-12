import "./style.css";
const CreateUser = () => {

  return (
    <div id="cadastro">
    <h1>Cadastro</h1>
    <label htmlFor="usuario">Usuário </label>
    <input type="text" name="usuario" id="usuario" />

    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" />

    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password"  />
    <button type="submit">Cadastar</button>
    </div>
  )
}

export default CreateUser