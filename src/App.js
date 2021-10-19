import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Pokemons from "./components/pokemons/Pokemons";
import PokemonTypes from "./components/PokemonTypes";
import NotFound from "./components/pages/NoFound";
import CustomPokemon from "./components/pokemons/custom/CustomPokemon";
import PokemonForm from "./components/pokemons/custom/PokemonForm";

import "./App.css";

function App() {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <main className="container">
        <Switch>
          <Route path="/pokemons/:id" component={PokemonForm} />
          <Route path="/pokemons" component={Pokemons} />
          <Route path="/custom-pokemons" component={CustomPokemon} />
          <Route path="/pokemon-types" component={PokemonTypes} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" to="/pokemons" exact />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
