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
      const response = await axios.post(
        `https://usuarios.ronierlima.dev/users/${id}/links`
      );
      
      setUser(response.data);
      navigate(`/users/${response.data}`);
    } catch (error) {
      alert("Deu error");
    } finally {
      setLoading(false);
    }
  }

  return loading ? <>carregando...</> : <Card user={user}></Card>;
}

export default Logado;