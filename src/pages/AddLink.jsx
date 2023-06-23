import { useState } from 'react';
import { API } from '../services/Api';
import { useParams } from 'react-router-dom';
  

const AddLink = () => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [userId, setUserId]= useState('');
    const [imageUrl, setImageUrl]= useState('');
    const [isPublic, setIsPublic]= useState('');
    const { id } = useParams();
  
    const handleAddLink = async () => {
        const dados= {title, url, description, userId, imageUrl, isPublic }
      try { 
        const response = await API.post(`/users/${id}/links`,
         dados );

    localStorage.setItem("logado", true);
       
        if (response.ok) {
          console.log('Link adicionado:', { title, url, description, userId, imageUrl, isPublic });
        } else {
          console.log('Erro ao adicionar o link.');
        }
      } catch (error) {
        console.log('Erro de conexão com a API:', error);
      }
    };
  
    return (
      <div>
        <h2>Adicionar Link</h2>
        <input
          type="string"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="userId"
          placeholder="userId"
          value={userId}
          onChange={(e) =>{
            console.log(e.target.value);
            setUserId(e.target.value);
            }}
        />
        <input
          type="imageUrl"
          placeholder="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
          <input
          type="checkbox"
          placeholder="isPublic"
          value={isPublic}
          onChange={(e) => setIsPublic(e.target.value='true')}
        />
        <button onClick={handleAddLink}>Adicionar</button>
      </div>
    );
  }
  
export default AddLink