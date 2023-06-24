import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Logo from "../assets/logo.png";
import axios from "axios";

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await axios.get("https://usuarios.ronierlima.dev/users");

    setUsers(response.data);
  }

  return (
    <>
    <div id="img"><img src={Logo} alt="Paisagem" width={200}/></div>
    <div id="formulario">
      <h1 id="Listusers">Usuários da 11Link</h1>
      <hr />
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
    </>
  );
}

export default ListUsers;