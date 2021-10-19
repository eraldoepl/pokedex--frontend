// import axios from "axios";

// axios.defaults.baseURL = "https://pokeapi.co/api/v2";

import { customPokemonApi, pokemonApi } from "./settingBaseUrl";

const http = {
  getOEM: pokemonApi.get,
  get: customPokemonApi.get,
  post: customPokemonApi.post,
  put: customPokemonApi.put,
  delete: customPokemonApi.delete,
};

export default http;
