import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(); // simulate
    navigate("/");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom d'utilisateur" required value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="Mot de passe" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">S'inscrire</button>
      </form>
      <p>Déjà inscrit ? <a href="/login">Se connecter</a></p>
    </div>
  );
};

export default Register;
