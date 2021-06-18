import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getType } from '../../actions/typesAction';
import { getPokemonsAction } from '../../actions/pokemonsAction';
import Pokemon from '../Pokemon';

import styled from 'styled-components';

const Button = styled.button`
background-color: #00C9A7;
margin-top: 1rem;
padding: 1rem 2rem;
border-radius: 7px;
font-size: 1.5rem;
font-weight: 700;
color: black;
border: 1px solid black;
text-decoration: none;
`; 

const Type = () => {

  const dispatch = useDispatch();

  const [type, setType] = useState('')

  const types = useSelector(state => state.types);
  const pokemons = useSelector(state => state.pokemons);
  const handleChange = e => {
    setType({
      ...type,
      [e.target.name]: e.target.value
    })
  }
  const hola = Object.values(type).toString()
  console.log(hola)

  useEffect(() => {
    dispatch(getType());
    dispatch(getPokemonsAction());
 
  }, [dispatch])



  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
      <>
    <form
      onSubmit={handleSubmit}>
        <select
          name='type'
          onChange={handleChange}
        >
          <option value="">-- Select a type --</option>
          {
            Array.isArray(types) ? types.map(type => (
              <option
                key={type.id}
                value={type.name}
              >{type.name}</option>
            )) : null
          }
        </select>
        <Button type='submit'>Filt</Button>
    </form>
<div>

{
    Array.isArray(pokemons) ? pokemons.filter(function (el) {
    for (let i = 0; i < pokemons.length; i++) {
        el.type[i].includes('poison')

    }}) : <p >NO SE Q PASA</p>
}

{/* {
    Array.isArray(prueba) ?
    prueba.map(pokemon => (
        <Pokemon
          key={pokemon.id}
          pokemon={pokemon}
        /> 
        
      )) : <p >NO SE Q PASA</p>

      } */}
      </div>
      </>
  );
}

export default Type;



