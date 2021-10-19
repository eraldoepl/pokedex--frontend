import { NavLink } from "react-router-dom";
import pokedexLogo from "../../assets/images/pokedex.svg";
import "./NavBar.css";
import Icon from "../common/Icons/Icon";
import { useState } from "react";

const NavBar = () => {
  const [collapsible, setCollapsible] = useState(false);
  const handleCollapsible = () => {
    setCollapsible((prevState) => !prevState);
  };

  const addCollapsible = collapsible ? "collapsible--expanded" : "";

  return (
    <nav className={`nav collapsible ${addCollapsible}`}>
      <NavLink to="/" className="nav__brand">
        <img src={pokedexLogo} alt="Pokedex_logo" width="180" height="53" />
      </NavLink>
      <Icon
        iconName="menu"
        styles="icon icon--white nav__tonggler"
        onClick={handleCollapsible}
      />
      <ul className="list nav__list collapsible__content">
        <li className="nav__item">
          <NavLink className="nav-link active" aria-current="page" to="/">
            Pokemons
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav-link" to="/custom-pokemons">
            Custom Pokemons
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav-link" to="/pokemon-types">
            Types
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
