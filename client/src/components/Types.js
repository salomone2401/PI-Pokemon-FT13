import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getType } from '../actions/typesAction';
import { getPokemonByType } from '../actions/pokemonsAction';


const Types = () => {

  const [type, setType] = useState('')

  const dispatch = useDispatch();


  const types = useSelector(state => state.types);
  const pokemons = useSelector(state => state.pokemons);


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
    dispatch(getPokemonByType(Object.values(type).toString()))
  }
  return (
    <form
      onSubmit={handleSubmit}>
      <div>
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
        <button type='submit'>Filt</button>
      </div>
    </form>

  );
}

export default Types;



