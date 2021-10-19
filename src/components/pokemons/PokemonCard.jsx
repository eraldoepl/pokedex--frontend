import { useState, Fragment } from "react";
import pokemonImages from "pokemon-images";
import PokemonType from "./pokemonType";
import PokemonDetails from "./PokemonDetails";

import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  const [pokemonPopUp, setpokemonPopUp] = useState(false);
  const pokemonName = pokemon.name;
  const image = pokemonImages.getSprite(pokemonName);

  const handleHideDetails = () => {
    setpokemonPopUp(false);
  };

  const handleDetails = () => {
    setpokemonPopUp(true);
  };

  return (
    <Fragment>
      {pokemonPopUp && (
        <PokemonDetails data={pokemon} onHideDetails={handleHideDetails} />
      )}
      <div className="pokemon" onClick={handleDetails}>
        <div className="pokemon--card">
          <div className="pokemon__image pokemon__image--gray">
            <img src={image} alt="PokemonImage" />
          </div>
          <div className="pokemon__body">
            <header>
              <h3 className="pokemon__header">{pokemonName}</h3>
            </header>
            <div className="pokemon__types">
              <PokemonType pokemonName={pokemonName} types={pokemon.types} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PokemonCard;
