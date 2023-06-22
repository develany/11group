import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Usuario = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});

  async function getUserProfile() {
    try {
      setLoading(true);
      const response = await axios.get(`https://usuarios.ronierlima.dev/users/${id}`);
      setProfile(response.data);
    } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div>
          <h1>Perfil do Usuário</h1>
          <p>Nome: {profile.nome}</p>
          <p>Email: {profile.email}</p>
          {/* Exiba outras informações do perfil aqui */}
        </div>
      )}
    </div>
  );
};