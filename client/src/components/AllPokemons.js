import React, { useEffect, useState } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsAction } from '../actions/pokemonsAction';
import Types from './Types';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NamePokemon from './NamePokemon';
import Header from './Header';


const Container = styled.div`
   display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    gap: 2rem;
    margin: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
}
`;

const Card = styled.div`
      box-shadow: 2px 2px 10px #666;
    padding: 1rem;
    background-color: #83c39b;
`;

const Image = styled.img`
       width: 250px;
    height: 170px;
`;

const AllPokemons = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(state => state.pokemons);


  useEffect(() => {
    dispatch(getPokemonsAction());
    // eslint-disable-next-line
  }, [dispatch])


  return (
    <div>
      <Header />
      <Types />
      <NamePokemon />
      <Container>
        {
          Array.isArray(pokemons) ? pokemons.map(pokemon => (

            <Link to={`/pokemon/${pokemon.id}`}>

              <Card key={pokemon.id} >
                <span>{pokemon.id}</span>
                <span>{pokemon.type}</span>
                <Image src={pokemon.img} alt="pokemon character" />
              </Card>

            </Link>
          )) : <h1>Cargando...</h1>
        }
      </Container>

    </div>
  )
}
export default AllPokemons;

