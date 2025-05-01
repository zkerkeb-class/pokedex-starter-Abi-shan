import React, { useState } from "react";
import pokemonsData from "../assets/pokemons";
import PokemonCard from "../components/pokemonCard";
import Loading from "../components/shared/Loading";
import Error from "../components/shared/Error";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteIds, setFavoriteIds] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const pokemonsPerPage = 12;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handleTypeFilter = (e) => {
    setSelectedType(e.target.value);
    setCurrentPage(1);
  };

  const toggleFavorite = (id) => {
    const updated = favoriteIds.includes(id)
      ? favoriteIds.filter((fid) => fid !== id)
      : [...favoriteIds, id];

    setFavoriteIds(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const filteredPokemons = pokemonsData.filter((pokemon) => {
    const matchName = pokemon.name.toLowerCase().includes(searchTerm);
    const matchType =
      selectedType === "Tous" || pokemon.types.includes(selectedType);
    return matchName && matchType;
  });

  const indexOfLast = currentPage * pokemonsPerPage;
  const indexOfFirst = indexOfLast - pokemonsPerPage;
  const currentPokemons = filteredPokemons.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredPokemons.length / pokemonsPerPage);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Pokédex</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Rechercher un Pokémon..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ padding: "8px", width: "250px", marginRight: "10px" }}
        />
        <select value={selectedType} onChange={handleTypeFilter}>
          <option value="Tous">Tous</option>
          <option value="Feu">Feu</option>
          <option value="Eau">Eau</option>
          <option value="Plante">Plante</option>
          <option value="Électrik">Électrik</option>
          <option value="Poison">Poison</option>
        </select>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "20px"
      }}>
        {currentPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            isFavorite={favoriteIds.includes(pokemon.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              background: currentPage === i + 1 ? "#007bff" : "#ccc",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
