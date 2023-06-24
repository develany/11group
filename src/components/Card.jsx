import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
function Card({ user }) {
  return (
    <div>
      {user ? (
        <div id="card">
          <img width="32" src={user.gravatarUrl} alt="imagem de perfil" style={{borderRadius:"50px"}} />
          <Link to={`/users/${user.id}`}>
            <h1>{user.name}</h1>
          </Link>
        </div>
      ) : (
        <>sem usuario</>
      )}
      <hr />
    </div>
  );
}

export default Card;
