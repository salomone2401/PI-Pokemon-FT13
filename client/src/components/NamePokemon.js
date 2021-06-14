import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getPokemonName, getPokemonsAction } from '../actions/pokemonsAction';
import { useHistory } from 'react-router';
const NamePokemon = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [nombre, setName] = useState({
    name: ''
  });
  // // //producto a editar
  const pokemonName = useSelector(state => state.pokemonName);
  //funcion que coloca los elementos en el state
  const handleChange = e => {
    setName({
      ...nombre,
      [e.target.name]: e.target.value
    })
  }

  const { name } = nombre;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getPokemonName(name))
    history.push(`/pokemon/${name}`);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={name}
          placeholder="Search By Name"
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default NamePokemon;

























// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getPokemonName} from '../actions/pokemonsAction';
// import { useHistory, useParams } from 'react-router';
// const NamePokemon = () => {
//   const [name, setName] = useState('');
//   const dispatch = useDispatch();
//   const history = useHistory()
//   const pokemonDetail = useSelector(state => state.pokemonDetail);
//   useEffect(() => {
//     dispatch(getPokemonName(name));
//     // eslint-disable-next-line
//   }, [dispatch, name])
//   const handleChange = e => {
//     setName({
//       ...name,
//       [e.target.name]: e.target.value
//     })
//   }
//   const handleSubmit = e => {
//     e.preventDefault();
//     history.push(`/pokemon/${pokemonDetail.name}`);
//   }
//   return (
//     <div>
//     <form
//       onSubmit={handleSubmit}>
//       <input
//         name="name"
//         type="text"
//         placeholder="Search By Name"
//         onChange={handleChange}
//       />
//       <button  
//       type='submit'
//       >add    
//       </button>

//     </form>
//      </div>
//   );
// }

// export default NamePokemon;