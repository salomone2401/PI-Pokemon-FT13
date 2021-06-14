import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetail } from '../actions/pokemonsAction';

import { useParams } from "react-router-dom";

const IdPokemon = () => {

  //mostrar todos los pokemons
  const dispatch = useDispatch();
  const pokemonDetail = useSelector(state => state.pokemonDetail);
  const { id } = useParams()

  useEffect(() => {
    dispatch(getPokemonDetail(id));
    // eslint-disable-next-line
  }, [dispatch, id])

  // [ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
  // [ ] Número de Pokemon (id)
  // [ ] Estadísticas (vida, fuerza, defensa, velocidad)
  // [ ] Altura y peso

  if (pokemonDetail === null) {
    return (
      <h1>Usuario no encontrado</h1>
    )
  } else if (pokemonDetail === undefined) {
    return (<h1>Cargando...</h1>)
  } else {
    return (
      <div>
        <li>{pokemonDetail.id}</li>
        <li>{pokemonDetail.name}</li>
        <img src={pokemonDetail.img} alt="pokemon character" />
        <li>{pokemonDetail.type}</li>
        <li>{pokemonDetail.HP}</li>
        <li>{pokemonDetail.attack}</li>
        <li>{pokemonDetail.defense}</li>
        <li>{pokemonDetail.height}</li>
        <li>{pokemonDetail.weight}</li>
      </div>)
  }
}

export default IdPokemon;


