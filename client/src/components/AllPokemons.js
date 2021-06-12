import React, { useEffect, useState } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsAction } from '../actions/pokemonsAction';


const AllPokemons = () => {

  //mostrar todos los pokemons
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);

  useEffect(() => {

    dispatch(getPokemonsAction());
    // eslint-disable-next-line
  }, [dispatch])

  //obtener el state


  return (
    <div>
      <ul>
        {
          Array.isArray(pokemons) ? pokemons.map(pokemon => (

              <li key={pokemon.id}>
                    
              <li>{pokemon.id}</li>
              <li>{pokemon.name}</li>
              <li>{pokemon.type}</li>
              <img src={pokemon.img} alt="pokemon character" />
        
              </li>
          
          )) : <h1>Cargando...</h1>
        }
      </ul>
    </div>
  )
}
export default AllPokemons;

