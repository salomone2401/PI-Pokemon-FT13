import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Types from './Types';
import NamePokemon from './NamePokemon';
import NewPokemon from './NewPokemon';
import Header from './Header';
import Pokemon from './Pokemon';
import Pagination from './Pagination';
import { getPokemonsAction } from '../actions/pokemonsAction';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


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
      <Header />
      <Types />
      <NamePokemon />

  
        <Link to={'/new'}>nuevo </Link>
   
      { error ? <p>There was a mistake</p> : null}

      { loading ? <p >Loading...</p> : null}
      <Container>
      {
        Array.isArray(pokemons) ? 
          pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon).map(pokemon => (
          <Pokemon
            key={pokemon.id}
           pokemon={pokemon}
          />
        )): <p >There is no pokemonss</p>
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