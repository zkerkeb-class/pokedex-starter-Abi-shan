import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon, isFavorite, toggleFavorite }) => {
  const navigate = useNavigate();

  return (
    <div
      className="pokemon-card"
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
      <h3 className="pokemon-name">{pokemon.name}</h3>

      <div className="pokemon-types">
        {pokemon.types.map((type, index) => (
          <span key={index}>{type}</span>
        ))}
      </div>

      <div className="pokemon-stats">
        <p>PV : {pokemon.hp}</p>
        <p>Attaque : {pokemon.attack}</p>
        <p>Défense : {pokemon.defense}</p>
      </div>

      {toggleFavorite && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // bloque redirection quand on clique sur le bouton
            toggleFavorite(pokemon.id);
          }}
        >
          {isFavorite ? "💔 Retirer des favoris" : "❤️ Ajouter aux favoris"}
        </button>
      )}
    </div>
  );
};

export default PokemonCard;
