import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card.jsx";
import Links from "../Links.jsx";
import AddLink from "../AddLink.jsx";
const userId = localStorage.getItem('userId')

const Logado = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [links, setLink] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      setLoading(true);
      const responseLinks = await axios.get(
        `https://usuarios.ronierlima.dev/users/${id}/links`
      );
      const response = await axios.get(
        `https://usuarios.ronierlima.dev/users/${id}`
      );
      setUser(response.data);
      setLink(responseLinks.data)
      console.log(response.data)
      console.log(responseLinks.data)
    } catch (error) {
      alert("Deu erro");
    } finally {
      setLoading(false);
    }
  }

  return loading ? <>carregando...</> :
    <>
      <div id="formulario" >
        <Card user={user}></Card>
        {id === userId && <AddLink />}
        <div className="links" >
          <Links links={links} style={{ height: 10 }} />
        </div>
      </div>
    </>
}

export default Logado;