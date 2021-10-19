import { useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../PokemonCard";
import pokemonImages from "pokemon-images";
import thorchu from "../../../assets/images/thorchu.jpg";
import SearchBox from "../../common/SearchBox";

const image = pokemonImages.getSprite("charmeleon");

const DUMMIT__POKEMONS = [
  {
    name: "Bulbasaur",
    pokeImage: image,
    types: [{ type: { name: "belong" } }, { type: { name: "loss" } }],
    weight: "46",
    order: "22",
    height: "76",
    experience: "97",
    attack: ["bank", "began", "reach"],
    abilities: ["house", "variety", "honor"],
  },
  {
    name: "Charmeleon",
    pokeImage: image,
    types: [{ type: { name: "announced" } }, { type: { name: "everything" } }],
    weight: "9",
    order: "25",
    height: "23",
    experience: "92",
    attack: ["stronger", "ground", "angry"],
    abilities: ["write", "mix", "sky"],
  },
  {
    name: "Metapod",
    pokeImage: image,
    types: [{ type: { name: "oldest" } }, { type: { name: "arm" } }],
    weight: "75",
    order: "95",
    height: "6",
    experience: "86",
    attack: ["complete", "nor", "he"],
    abilities: ["movie", "natural", "salt"],
  },
  {
    name: "Pidgeotto",
    pokeImage: image,
    types: [{ type: { name: "deep" } }, { type: { name: "product" } }],
    weight: "51",
    order: "95",
    height: "10",
    experience: "28",
    attack: ["breakfast", "sad", "topic"],
    abilities: ["necessary", "actual", "hand"],
  },
  {
    name: "Pikachu",
    pokeImage: image,
    types: [{ type: { name: "kill" } }, { type: { name: "town" } }],
    weight: "57",
    order: "79",
    height: "6",
    experience: "96",
    attack: ["cave", "driving", "grain"],
    abilities: ["child", "gas", "proper"],
  },
];

const CustomPokemon = () => {
  const [searchQuey, setsearchQuey] = useState("");

  const handleSearch = (query) => {
    setsearchQuey(query);
  };

  let filtered = DUMMIT__POKEMONS;
  if (searchQuey) {
    filtered = DUMMIT__POKEMONS.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchQuey.toLowerCase())
    );
  }

  return (
    <section className="block-pokemons">
      <header className="grid grid--1x2 block-pokemons__header">
        <div className="block-pokemons__body">
          <h1 className="block-pokemons__heading">Create your on Pokemon</h1>
          <Link to="/pokemons/:id" className="btn btn--accent btn--streched">
            + New Pokemon
          </Link>
        </div>
        <img src={thorchu} className="" alt="pokeBall" />
      </header>
      <SearchBox value={searchQuey} onChange={handleSearch} />
      <div className="grid grid__pokemon">
        {filtered.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemonURL={false}
            pokemon={pokemon}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomPokemon;
