import { Button, Input } from 'antd';
import { API } from '../services/Api';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const AddLink = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token')
  const [title, setTitle] = useState('');
  const description = 'Links'
  const [url, setUrl] = useState('');
  const imageUrl = 'perfil'
  const isPublic = true;
  const userId = localStorage.getItem('userId')

  const [link, setLink] = useState(null);

  async function add() {

    const values = { title, url, description, userId, imageUrl, isPublic }
    try {
      const response = await API.post(`/users/${id}/links`, values, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });


      setLink(response.data);
    } catch (error) {
      alert(error.response.data.error)
    }
    window.location.reload()
  }

  return (
    <div>
      {link && <h2>Links</h2>}
      <h1 id='linkTexto'>Adicionar Link</h1>
      <Input
        type="string"
        id="title"
        name="title"
        placeholder="De onde é o link?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        type="url"
        id="url"
        name="URL"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <Button type="primary" style={{ backgroundColor: '#222d97', fontFamily: 'Quebec-Light' }} className="login-form-button" onClick={add} htmlType="submit">Adicionar</Button>
    </div>
  );
}

export default AddLink