import { getPokemon, getPokemonDetails } from "../../services/pokemonServices";
import { useEffect, useState } from "react";
import usePokemon from "../../hooks/use-pokemon";
import PokemonCard from "./PokemonCard";
import SearchBox from "../common/SearchBox";
import SelectList from "../common/SelectList";
import Button from "../common/Button";
import Pagination from "../common/pagination";

import "./Pokemons.css";
import pokeBall from "../../assets/images/poke-ball.png";

const DUMMIT_TYPE = [
  { id: "1", name: "Normal" },
  { id: "2", name: "Fighting" },
  { id: "3", name: "Flying" },
  { id: "4", name: "Poison" },
  { id: "5", name: "Ground" },
  { id: "6", name: "Rock" },
  { id: "7", name: "Bug" },
  { id: "8", name: "Ghost" },
  { id: "9", name: "Steel" },
  { id: "10", name: "Fire" },
  { id: "11", name: "Water" },
  { id: "12", name: "Grass" },
  { id: "13", name: "Electric" },
  { id: "14", name: "Psychic" },
  { id: "15", name: "Ice" },
  { id: "16", name: "Dragon" },
  { id: "17", name: "Fairy" },
];

const Pokemons = () => {
  const [pokemons, setPokemon] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const totalCount = 151;

  const {
    handleSearch,
    handleFilterType,
    handlePageChange,
    handleResetFilter,
    getPagedData,
    searchQuey,
    filterType,
    currentPage,
    pageSize,
  } = usePokemon();

  useEffect(() => {
    async function gettingPokemon() {
      const { data } = await getPokemon();
      setPokemon(data.results);
    }
    gettingPokemon();
  }, []);

  useEffect(() => {
    async function pokemonDetails() {
      for (const pokemon of pokemons) {
        const { data } = await getPokemonDetails(pokemon.name);
        setPokemonDetails((prevState) => [...prevState, data]);
      }
    }
    pokemonDetails();
  }, [pokemons]);

  const { pokemonsPaginated } = getPagedData(pokemonDetails);
  return (
    <section className="block-pokemons">
      <header className="grid grid--1x2 block-pokemons__header">
        <h1 className="block-pokemons__heading">Consuming Pokemon API</h1>
        <img
          src={pokeBall}
          className="block-pokemons__pokeBall"
          alt="pokeBall"
        />
      </header>
      <div className="filters">
        <SearchBox value={searchQuey} onChange={handleSearch} />
        <SelectList
          value={filterType}
          options={DUMMIT_TYPE}
          onChange={handleFilterType}
        />
        <Button onReset={handleResetFilter} />
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="grid grid__pokemon">
        {pokemonsPaginated.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemonURL={true} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
};

export default Pokemons;
