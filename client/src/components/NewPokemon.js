import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewPokemon } from '../actions/pokemonsAction';
import { getType } from '../actions/typesAction';
import Header from './Header';

const NewPokemon = ({ history }) => {

  const dispatch = useDispatch();

  const types = useSelector(state => state.types);

   const loading = useSelector(state => state.loading);
   const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(getType());
  }, [dispatch])

  const [pokemon, setPokemon] = useState({
    name: '',
    healthpoints: null,
    attack: null,
    defense: null,
    speed: null,
    height: null,
    weight: null
  })


 const [type, setType] = useState([])

  const { name, healthpoints, attack, defense, speed, height, weight} = pokemon;

  const handleChange = e => {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value
    })
  }
  const handle = e =>{
    setType([
      ...type,
        [e.target.name]= e.target.value
    ])
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(dispatch(createNewPokemon(pokemon, type)))
    history.push('/pokemon');
  }

  return (
    <>

      <Header />
      <h1>Create your own Pokemon</h1>

      <form
        onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name='name'
          value={name}
        />
        <input
          type="number"
          placeholder="Health Points"
          onChange={handleChange}
          name='healthpoints'
          value={healthpoints}
        />
        <input
          type="number"
          placeholder="Attack"
          onChange={handleChange}
          name='attack'
          value={attack}
        />
         <input
          type="number"
          placeholder="Speed"
          onChange={handleChange}
          name='speed'
          value={speed}
        />

        <input
          type="number"
          placeholder="Defense"
          onChange={handleChange}
          name='defense'
          value={defense}
        />
        <input
          type="number"
          placeholder="Height"
          onChange={handleChange}
          name='height'
          value={height}
        />
        <input
          type="number"
          placeholder="Weight"
          onChange={handleChange}
          name='weight'
          value={weight}
        />
        <p>choose a type</p>
      { error ? <p>hay un error</p> : null }
        {
           
          Array.isArray(types) ? types.map(type => (
            <div>
            <label>{type.name}</label>
            <input 
            key={type.id}
            type="radio"
            value={type.name}
            name='type' 
            onChange={handle}
          />
          </div>
          )) : null
        }
      
        <button
          type='submit'
         
        >Create</button>
      </form>
      { loading ? <p>Cargando...</p> : null }
                        
                        { error ? <p>{error}</p> : null }
    </>
  );
}

export default NewPokemon;