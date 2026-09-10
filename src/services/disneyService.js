import axios from "axios";

const API_URL = "https://api.disneyapi.dev";

export async function getCharacters(pageSize = 50) {
  const response = await axios.get(`${API_URL}/character`, {
    params: { pageSize },
  });

  // La API devuelve: { data: [...], info: {...} }
  return response.data.data;
}

export async function getCharacterById(id) {
  const response = await axios.get(`${API_URL}/character/${id}`);
  return response.data.data;
}