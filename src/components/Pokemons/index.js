import React, { useState } from "react";
import { getPokemons } from "../../services/pokemon-services";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState(null);

  const obtenerPokemons = async () => {
    const aux_pokemons = await getPokemons();
    setPokemons(aux_pokemons);
    console.log(aux_pokemons);
  };

  return (
    <div>
      <button onClick={obtenerPokemons}>Lista de pokemones</button>
      {pokemons &&
        pokemons.map((pokemon) => <div key={pokemon.name}>{pokemon.name}</div>)}
    </div>
  );
};

export default Pokemons;
