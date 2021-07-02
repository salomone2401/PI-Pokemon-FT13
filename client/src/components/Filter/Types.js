import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getType } from '../../actions/typesAction';
import { getPokemonByType } from '../../actions/pokemonsAction';
import styled from 'styled-components';

const Button = styled.button`
    padding: 1rem 1.5rem;
    background-color: #00C9A7;
    border-radius: 7px;
    font-size: 1.2rem;
    font-weight: 700;
    color: black;
    border: 1px solid black;
    text-decoration: none;
    :hover{
        background-color: #95E06C;
    }
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Select = styled.select`
    padding: 1rem 1.5rem;
    color: black;
    font-size: 1.2rem;
    border-radius: 7px;
    border: 1px solid black;
    -webkit-appearance: button;
    appearance: button;
    outline: none;

  `;
const Div = styled.div`
    margin: 1.5rem .5rem;
    @media (min-width: 768px) {
        font-size: 1.5rem;
 }
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
    dispatch(getPokemonByType(Object.values(type).toString()))
  }, [dispatch])


  const handleSubmit = e => {
    e.preventDefault();
    console.log(dispatch(getPokemonByType(Object.values(type).toString())))
  }
  return (
    <form
      onSubmit={handleSubmit}>
      <Div>
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
      </Div>
    </form>

  );
}

export default Types;
