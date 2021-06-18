import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NamePokemon from './NamePokemon';
import Header from './Header';
import Pokemon from './Pokemon';
import Pagination from './Pagination';
import {getPokemonsAction } from '../actions/pokemonsAction';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import OrderByNameAsc from './Order/OrderByNameAsc';
import OrderByNameDesc from './Order/OrderByNameDesc';

import OrderByAttackAsc from './Order/OrderByAttackAsc';
import OrderByAttackDesc from './Order/OrderByAttackDesc';

import FilterByOwn from './Filter/FilterByOwn';
import FilterByAPI from './Filter/FilterByAPI';

import Types from './Types';

import { createGlobalStyle } from 'styled-components'



const GlobalStyle = createGlobalStyle`
  body {
    background: #B0A8B9;
  }
`;

const Container = styled.div`
   display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin: 2rem;
@media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    margin: 4rem;
}
`;
const Box = styled.div`
   display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin: 2rem;
@media (min-width: 768px) {
        grid-template-columns: 45% 55%;
        gap: 2rem;
    margin: 4rem;
}
`;
const Fieldset = styled.fieldset`
   display: flex;
   justify-content: space-around;
   background-color: #4B4453;
margin: 0;
border: 1px solid black;
`;

const Legend = styled.legend`
color: white;
`;


const Pokemons = () => {

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12)

  useEffect(() => {
    dispatch(getPokemonsAction());
    // eslint-disable-next-line
  }, [dispatch])

  const pokemons = useSelector(state => state.pokemons);
  const error = useSelector(state => state.error);
  const loading = useSelector(state => state.loading);

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  //const currentPokemon = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <> 
      <GlobalStyle />
      <Header />
      <Box>
      <Fieldset>
        <Legend>Order by...</Legend>
        <OrderByNameAsc />
        <OrderByNameDesc />
        <OrderByAttackAsc />
        <OrderByAttackDesc />
  
      </Fieldset>
    
      <Fieldset>
        <Legend>Filter by...</Legend>
        <FilterByAPI/>
        <FilterByOwn />
        <Types />
      </Fieldset>
      </Box>

      <Link to={'/new'}>nuevo </Link>
      <NamePokemon />


      

      { error ? <p>There was a mistake</p> : null}

      {/* { loading ? <p >Loading...</p> : null} */}
      <Container>
        {
          Array.isArray(pokemons) ?
            pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon).map(pokemon => (
              <Pokemon
                key={pokemon.id}
                pokemon={pokemon}
              />
            )) : <p >There is no pokemonss</p>
        }
      </Container>
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        paginate={paginate}
      />

    </>
  )
}
export default Pokemons;