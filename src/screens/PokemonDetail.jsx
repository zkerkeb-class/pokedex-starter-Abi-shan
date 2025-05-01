import React from "react";
import { useParams, Link } from "react-router-dom";
import pokemons from "../assets/pokemons";

const PokemonDetail = () => {
  const { id } = useParams();
  const pokemon = pokemons.find((p) => p.id === parseInt(id));

  if (!pokemon) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Pokémon introuvable</h2>
        <Link to="/">⬅️ Retour</Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <Link to="/" style={{ textDecoration: "none", color: "#007bff" }}>
        ⬅️ Retour au Pokédex
      </Link>

      <h1 style={{ marginTop: "1rem" }}>{pokemon.name}</h1>

      <img
        src={pokemon.image}
        alt={pokemon.name}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
          margin: "1rem 0",
        }}
      />

      <div style={{ fontSize: "18px", lineHeight: "1.8" }}>
        <p><strong>Types :</strong> {pokemon.types.join(", ")}</p>
        <p><strong>PV :</strong> {pokemon.hp}</p>
        <p><strong>Attaque :</strong> {pokemon.attack}</p>
        <p><strong>Défense :</strong> {pokemon.defense}</p>
      </div>
    </div>
  );
};

export default PokemonDetail;
