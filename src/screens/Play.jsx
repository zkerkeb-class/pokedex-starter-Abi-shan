import React, { useState, useEffect } from "react";
import pokemons from "../assets/pokemons";

const Play = () => {
  const [current, setCurrent] = useState(null);
  const [guess, setGuess] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const maxRounds = 10;

  const getRandomPokemon = () => {
    return pokemons[Math.floor(Math.random() * pokemons.length)];
  };

  const startNewRound = () => {
    setCurrent(getRandomPokemon());
    setRevealed(false);
    setGuess("");
    setFeedback("");
    setTries((prev) => prev + 1);
  };

  useEffect(() => {
    startNewRound();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!current) return;

    const isCorrect = guess.trim().toLowerCase() === current.name.toLowerCase();
    if (isCorrect) {
      setFeedback("🎉 Bien joué !");
      setScore((prev) => prev + 1);
    } else {
      setFeedback(`❌ Faux ! C'était ${current.name}`);
    }
    setRevealed(true);
  };

  const handleReveal = () => {
    setFeedback(`👀 C'était ${current.name}`);
    setRevealed(true);
  };

  const handleNext = () => {
    if (tries < maxRounds) {
      startNewRound();
    } else {
      alert(`🏁 Partie terminée ! Score : ${score} / ${maxRounds}`);
      setScore(0);
      setTries(0);
      startNewRound();
    }
  };

  const progress = Math.round((tries / maxRounds) * 100);

  return (
    <div style={{
      minHeight: "100vh",
      padding: "2rem",
      textAlign: "center",
      background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      transition: "all 0.5s ease"
    }}>
      <h1 style={{ marginBottom: "1rem", fontSize: "2.5rem" }}>⚡ Qui est-ce Pokémon ?</h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Score : {score} / {maxRounds}</p>

      <div style={{
        background: "#ddd",
        borderRadius: "8px",
        height: "10px",
        width: "80%",
        maxWidth: "400px",
        margin: "0 auto 2rem"
      }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#00c853",
            borderRadius: "8px",
            transition: "width 0.3s ease",
          }}
        ></div>
      </div>

      {current && (
        <div
          style={{
            margin: "2rem auto",
            transition: "all 0.5s ease",
            maxWidth: "300px",
            animation: !revealed ? "pulse 1.5s infinite" : "none"
          }}
        >
          <img
            src={current.image}
            alt="Mystery Pokémon"
            style={{
              width: "100%",
              height: "auto",
              filter: revealed ? "none" : "brightness(0) contrast(0)",
              borderRadius: "20px",
              boxShadow: revealed ? "0 0 25px rgba(0, 0, 0, 0.2)" : "none",
              transition: "filter 0.4s ease, transform 0.3s ease",
              transform: revealed ? "scale(1.05)" : "scale(1)"
            }}
          />
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entre le nom du Pokémon"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          style={{
            padding: "12px",
            width: "260px",
            borderRadius: "8px",
            border: "2px solid #ccc",
            fontSize: "1rem",
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            marginTop: "1rem",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "1rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            transition: "background 0.3s ease"
          }}
        >
          ⚔️ Deviner
        </button>
      </form>

      {!revealed && (
        <button
          onClick={handleReveal}
          style={{
            marginTop: "1rem",
            color: "#ff5252",
            background: "none",
            border: "none",
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          🔍 Je donne ma langue au Miaouss
        </button>
      )}

      {feedback && (
        <div style={{ marginTop: "2rem", fontSize: "1.3rem", color: revealed ? "#2e7d32" : "#d50000" }}>
          <p>{feedback}</p>
          <button
            onClick={handleNext}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              borderRadius: "6px",
              background: "#00c853",
              color: "white",
              fontSize: "1rem",
              cursor: "pointer",
              border: "none"
            }}
          >
            🔁 Suivant
          </button>
        </div>
      )}

      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.08);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0.8;
            }
          }

          @media (max-width: 600px) {
            img {
              width: 80% !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Play;
