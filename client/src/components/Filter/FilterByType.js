import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getType } from '../../actions/typesAction';
import { filtByType } from '../../actions/pokemonsAction';


const FilterByType = () => {

  const dispatch = useDispatch();

  const [type, setType] = useState('')

  const types = useSelector(state => state.types);

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
   console.log(dispatch(filtByType(hola)))
  }, [dispatch])





  const handleSubmit = e => {
    e.preventDefault();
    dispatch(filtByType(hola))

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

export default FilterByType;



