import React, { useEffect, useState } from "react";
import pokemons from "../assets/pokemons";
import PokemonCard from "../components/pokemonCard";

const Favorites = () => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteIds(stored);
  }, []);

  const toggleFavorite = (id) => {
    const updated = favoriteIds.includes(id)
      ? favoriteIds.filter((fid) => fid !== id)
      : [...favoriteIds, id];

    setFavoriteIds(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const favoritePokemons = pokemons.filter((p) => favoriteIds.includes(p.id));

  return (
    <div style={{ padding: "2rem" }}>
      <h2>❤️ Mes Pokémons favoris</h2>
      {favoritePokemons.length === 0 ? (
        <p>Vous n'avez pas encore de favoris.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px" }}>
          {favoritePokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              isFavorite={true}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
