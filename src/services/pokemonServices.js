import http from "./httpServices";

const apiEndpoint = "/pokemon?limit=151";

export function getPokemon() {
  return http.getOEM(apiEndpoint);
}

export function getPokemonDetails(pokemonName) {
  return http.getOEM(`/pokemon/${pokemonName}`);
}
