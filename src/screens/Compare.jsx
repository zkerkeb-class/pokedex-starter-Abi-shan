import React, { useState } from "react";
import pokemons from "../assets/pokemons";

const Compare = () => {
  const [firstId, setFirstId] = useState("");
  const [secondId, setSecondId] = useState("");
  const [selected, setSelected] = useState(null);

  const handleCompare = () => {
    const poke1 = pokemons.find((p) => p.id === parseInt(firstId));
    const poke2 = pokemons.find((p) => p.id === parseInt(secondId));

    if (poke1 && poke2 && poke1.id !== poke2.id) {
      setSelected({ poke1, poke2 });
    } else {
      alert("Choisissez deux Pokémon différents.");
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Comparateur de Pokémons</h1>

      <div style={{ marginBottom: "1rem" }}>
        <select value={firstId} onChange={(e) => setFirstId(e.target.value)}>
          <option value="">Choisir Pokémon 1</option>
          {pokemons.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        <span style={{ margin: "0 10px" }}>vs</span>

        <select value={secondId} onChange={(e) => setSecondId(e.target.value)}>
          <option value="">Choisir Pokémon 2</option>
          {pokemons.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleCompare}>Comparer</button>

      {selected && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem", gap: "2rem" }}>
          {[selected.poke1, selected.poke2].map((p, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "10px",
                width: "200px",
              }}
            >
              <img src={p.image} alt={p.name} style={{ width: "100px", height: "100px" }} />
              <h3>{p.name}</h3>
              <p><strong>Type :</strong> {p.types.join(", ")}</p>
              <p><strong>PV :</strong> {p.hp}</p>
              <p><strong>Attaque :</strong> {p.attack}</p>
              <p><strong>Défense :</strong> {p.defense}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Compare;
