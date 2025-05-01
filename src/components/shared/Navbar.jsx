import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Pokédex</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Accueil</Link>
        <Link to="/favorites" style={styles.link}>Favoris</Link>
        <Link to="/compare" style={styles.link}>Comparer</Link>
        <Link to="/play" style={styles.link}>🎮 Jouer</Link>

        {!token ? (
          <>
            <Link to="/login" style={styles.link}>Connexion</Link>
            <Link to="/register" style={styles.link}>Inscription</Link>
          </>
        ) : (
          <button onClick={handleLogout} style={styles.logout}>Déconnexion</button>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    background: "#1e272e",
    color: "#fff",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  logo: {
    fontSize: "1.5rem",
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    padding: "6px 10px",
    borderRadius: "5px",
    transition: "background 0.2s ease",
  },
  logout: {
    background: "#ff4757",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
  }
};

export default Navbar;
