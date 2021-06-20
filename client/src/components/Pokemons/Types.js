import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getType } from '../../actions/typesAction';
import { getPokemonByType } from '../../actions/pokemonsAction';

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

const Select = styled.select`
  color: black;
  padding: 1rem 1rem;
  font-size: 1.3rem;
  border-radius: 7px;
  border: 1px solid black;
  -webkit-appearance: button;
  appearance: button;
  outline: none;
  `; 
const Types = () => {

  const [type, setType] = useState('')

  const dispatch = useDispatch();


  const types = useSelector(state => state.types);

  const handleChange = e => {
    setType({
      ...type,
      [e.target.name]: e.target.value
    })
  }

  
  useEffect(() => {
    dispatch(getType());
  }, [dispatch])


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getPokemonByType(Object.values(type).toString()))

  }
  return (
    <form
      onSubmit={handleSubmit}>
      <div>
        <Select
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
        </Select>
        <Button type='submit'>Filt</Button>
      </div>
    </form>

  );
}

export default Types;



