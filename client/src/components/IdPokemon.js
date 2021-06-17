import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetail } from '../actions/pokemonsAction';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
display: grid;
grid-template-columns: 30% 70%;
text-align: center;
`;

const Text = styled.p`
    color: orange;
    font-size: 4rem;
    margin-left: 1rem;
`;
const Image = styled.div`
    text-align: center;
`;

const Body = styled.div`
    width: 100%;
    background-color: #F4B2A3;
    margin-bottom: 0;

`;

const Button = styled.a`
font-size: 1rem;
text-decoration: none;
color: black;
background-color: yellowgreen;
padding: 1rem;
`;

const IdPokemon = () => {

  //mostrar todos los pokemons
  const dispatch = useDispatch();
  const pokemonDetail = useSelector(state => state.pokemonDetail);
  const { id } = useParams()

  useEffect(() => {
    dispatch(getPokemonDetail(id));
    // eslint-disable-next-line
  }, [dispatch, id])

  if (pokemonDetail === null || pokemonDetail === undefined) {
    return ( <h1>That pokemondoesnt exist</h1>)
  } else {

    return (
      <>
      <Header/>
      <Body>

        <Image>
          <span>#{pokemonDetail.id}</span>
          <img src={pokemonDetail.img} alt="pokemon character" />
        </Image>
        <Container>

          <p>{pokemonDetail.type.join(',')}</p>
          <p><span>Name:</span>{pokemonDetail.name}</p>
          <p><span>Health Points:</span>{pokemonDetail.HP}</p>
          <p><span>Attack:</span>{pokemonDetail.attack}</p>
          <p><span>Defense:</span>{pokemonDetail.defense}</p>
          <p><span>Height:</span>{pokemonDetail.height}</p>
          <p><span>Weight:</span>{pokemonDetail.weight}</p>
        </Container>
      </Body>
      <Button href="/pokemon">&laquo; BACK TO MAIN PAGE</Button>

      </>)
  }
}

export default IdPokemon;


