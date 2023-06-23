import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../components/Card.jsx";

const Logado = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

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
      console.log(response.data)
    } catch (error) {
      alert("Deu error");
    } finally {
      setLoading(false);
    }
  }

  return loading ? <>carregando...</>:<Card user={user}></Card>;
}

export default Logado;