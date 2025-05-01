import axios from "axios";

const API_URL = "http://localhost:3000/api/pokemons";

export const getAllPokemons = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
