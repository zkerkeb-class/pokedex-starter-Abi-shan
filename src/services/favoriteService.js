import axios from "axios";

const API_URL = "http://localhost:5000/api/favorites"; // ➡️ adapte si besoin

// Ajouter un Pokémon aux favoris
export const addFavorite = async (pokemonId, token) => {
  const response = await axios.post(
    `${API_URL}/add`,
    { pokemonId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// Retirer un Pokémon des favoris
export const removeFavorite = async (pokemonId, token) => {
  const response = await axios.post(
    `${API_URL}/remove`,
    { pokemonId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// Récupérer tous les favoris de l'utilisateur
export const getFavorites = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
