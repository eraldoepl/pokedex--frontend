import axios from "axios";

const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

const customPokemonApi = axios.create({
  baseURL: "http://localhost:8900/pokemons",
});

export { pokemonApi, customPokemonApi };
