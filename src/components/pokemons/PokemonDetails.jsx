import Modal from "../common/modals/Modal";
import "./PokemonDetails.css";
import Icon from "../common/Icons/Icon";
import pokemonImages from "pokemon-images";

const PokemonDetails = ({ onHideDetails, data }) => {
  const pokemonName = data.name;
  const pokemonWeight = data.weight;
  const pokemonNumber = data.order;
  const pokemonHeight = data.height;
  const pokemonExp = data.base_experience;
  const pokemonImage = pokemonImages.getSprite(pokemonName);

  return (
    <Modal onHideDetails={onHideDetails}>
      <div className="PokeDetails">
        <header className="PokeDetails__header">
          <img
            className="pokemon__image pokemon__image--blue"
            src={pokemonImage}
            alt="PokemonImage"
          />
          <h2>{pokemonName}</h2>
        </header>
        <ul className="list">
          <li
            key={pokemonName + pokemonNumber}
            className="PokeDetails__list-arrow"
          >
            <Icon iconName="sort" styles="icon icon--primary" />
            <div className="PokeDetails__body">
              <h4 className="PokeDetails__list__header">Order Number</h4>
              <p className="list--arrow">{pokemonNumber}</p>
            </div>
          </li>
          <li
            key={pokemonName + pokemonHeight}
            className="PokeDetails__list-arrow"
          >
            <Icon iconName="height" styles="icon icon--primary" />
            <div className="PokeDetails__body">
              <h4 className="PokeDetails__list__header">Height</h4>
              <p className="list--arrow">{pokemonHeight} ft</p>
            </div>
          </li>
          <li
            key={pokemonName + pokemonWeight}
            className="PokeDetails__list-arrow"
          >
            <Icon iconName="weight" styles="icon icon--primary" />
            <div className="PokeDetails__body">
              <h4 className="PokeDetails__list__header">Weight</h4>
              <p className="list--arrow">{pokemonWeight} kg</p>
            </div>
          </li>
          <li
            key={pokemonName + pokemonExp}
            className="PokeDetails__list-arrow"
          >
            <Icon iconName="boxing-fighter" styles="icon icon--primary" />
            <div className="PokeDetails__body">
              <h4 className="PokeDetails__list__header">Battle Experience</h4>
              <p className="list--arrow">{pokemonExp} </p>
            </div>
          </li>

          <li
            key={pokemonName + "_27-creativity"}
            className="PokeDetails__list-arrow"
          >
            <div className="PokeDetails__body--multiple">
              <header className="PokeDetails__body__header">
                <Icon iconName="idea" styles="icon icon--primary" />
                <h4 className="PokeDetails__list__header">ability</h4>
              </header>
              <div className="PokeDetails__multiple">
                {data.abilities.map((item) => (
                  <p
                    key={pokemonName + item.ability.name}
                    className="list--arrow"
                  >
                    {item.ability.name}
                  </p>
                ))}
              </div>
            </div>
          </li>

          <li key={pokemonName + "battle"} className="PokeDetails__list-arrow">
            <div className="PokeDetails__body--multiple">
              <header className="PokeDetails__body__header">
                <Icon iconName="battle" styles="icon icon--primary" />
                <h4 className="PokeDetails__list__header">Attacks</h4>
              </header>
              <div className="PokeDetails__multiple">
                {data.moves.map((item) => (
                  <p key={pokemonName + item.move.name} className="list--arrow">
                    {item.move.name}
                  </p>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default PokemonDetails;
