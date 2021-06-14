import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getType } from '../actions/typesAction';
import { getPokemonsAction } from '../actions/pokemonsAction';


const Types = () => {

  const dispatch = useDispatch();
  const types = useSelector(state => state.types);
  const pokemons = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getType());
    dispatch(getPokemonsAction());
    // eslint-disable-next-line
  }, [dispatch])

  
// const filter = arg => {
//   for (let i = 0; i < pokemons.length; i++) {
//     const hola = pokemons[i].type.map(e => e.name)
//     if(type.name === hola){
//     }
//   }
// }

//   const redirectRoute= pokemon => {
//     dispatch( getPo() );
//     history.push(`/productos/editar/${producto.id}`)
// }
  return (
    <form
    // onSubmit={handleSubmit}>+
    >
      <div>
        <select 
        // name='type'
        // onChange={handleChange}
        >
          <option value="">-- Select a type --</option>
          {
            Array.isArray(types) ? types.map(type => (
              <option
                key={type.name}
                value={type.name}
              >{type.name}</option>

            )) : <h1>Cargando...</h1>

          }

        </select>
      </div>

    </form>
  );
}

export default Types;



