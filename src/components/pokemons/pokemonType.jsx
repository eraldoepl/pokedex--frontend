import { Fragment } from "react";
import Badge from "../common/badges/Badge";

const PokemonType = ({ pokemonName, types }) => {
  return (
    <Fragment>
      {types.map(({ type }) => (
        <Badge
          key={pokemonName + type.name}
          styles="bg bg--primary bg--small"
          label={type.name}
        />
      ))}
    </Fragment>
  );
};

export default PokemonType;
