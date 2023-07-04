import { Button, message } from 'antd';
import { API } from '../services/Api';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const AddLink = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token')
  const [title, setTitle] = useState('');
  const description = 'Links'
  const [url, setUrl] = useState('');
  const imageUrl= 'perfil'
  const isPublic = true;
  const userId = localStorage.getItem('userId')
    
  const [link, setLink] = useState(null);

  async function add () {
    
    const values = { title, url, description, userId, imageUrl, isPublic }
    try {
      const response = await API.post(`/users/${id}/links`, values, { headers: {
        Authorization: `Bearer ${token}`
      }});


      setLink(response.data);
    } catch (error) {
      alert(error.response.data.error)
    }
    message.error(values)
  }

  return (
    <div>
      {link && <h2>Links</h2>}
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
      
      <Button onClick={add} htmlType="submit" >Adicionar</Button>
    </div>
  );
}

export default AddLink