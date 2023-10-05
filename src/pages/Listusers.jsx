import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { Input, Space } from "antd";

const { Search } = Input;

function ListUsers() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await axios.get("https://usuarios.ronierlima.dev/users");
    const sortedUsers = response.data.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
    );
    setUsers(sortedUsers);
  }

  const handleSearch = () => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };

  return (
    <>
      <div id="formulario" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div>
          <Space direction="vertical" >
            <Search
              placeholder="Pesquisar usuários"
              allowClear
              enterButton="Pesquisar"
              size="large"
              onSearch={handleSearch}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </Space>
        </div>
        <hr />
        <div className="menu">
          {searchResults.length > 0
            ? searchResults.map((user) => (
              <Card key={user.id} user={user} />
            ))
            : users.map((user) => (
              <Card key={user.id} user={user} />
            ))}
        </div>
      </div>
    </>
  );
}

export default ListUsers;

