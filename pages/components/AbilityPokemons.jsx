import React from 'react';
import { useSelector } from 'react-redux';

const AbilityPokemons = () => {
  const state = useSelector((state) => state.ability);
  const listPokemon = state.infoAbility.pokemon;

  if (!listPokemon) {
    return <div>No pokemon found</div>;
  }
  return (
    <div>
      <h1>Pokemons with this ability</h1>
      <ul>
        {listPokemon.map((p) => (
          <li key={p.pokemon.name}>
            <h2>{p.pokemon.name}</h2>
            <a href={p.pokemon.url}>Know more about : {p.pokemon.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AbilityPokemons;
