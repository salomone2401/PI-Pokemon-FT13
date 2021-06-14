import React, { useEffect, useState } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsAction } from '../actions/pokemonsAction';
import Types from './Types';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NamePokemon from './NamePokemon';



const AllPokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);




  useEffect(() => {
    dispatch(getPokemonsAction());
    // eslint-disable-next-line
  }, [dispatch])


  return (
    <div>
      <Types />
      <input
        name="name"
        type="text"
        value={name}
        placeholder="Search By Name"
        onChange={handleChange}
      />
      <NamePokemon />

      {/* {
          Array.isArray(pokemons) ? pokemons.map(pokemon => (
           
            <Link to={`/pokemon/${pokemon.id}`}>
             <div>
              <span key={pokemon.id} />
              <span>{pokemon.id}</span>
              <span>{pokemon.name}</span>
              <span>{pokemon.type}</span>
              <img src={pokemon.img} alt="pokemon character" />
              </div>
              </Link>
          )) : <h1>Cargando...</h1>
        } */}

    </div>
  )
}
export default AllPokemons;

