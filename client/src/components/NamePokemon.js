import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getPokemonName} from '../actions/pokemonsAction';

const NamePokemon = () => {
  const dispatch = useDispatch();

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

  const {name} = nombre;
  console.log(name)
  //llenar el state automaticamente
  useEffect(() => {
    dispatch(getPokemonName(name));
    // eslint-disable-next-line
  }, [dispatch, name])


console.log(pokemonName)

  return (
  
       <div>
        <li>{pokemonName.id}</li>
        <li>{pokemonName.name}</li>
        <img src={pokemonName.img} alt="pokemon character" />
        <li>{pokemonName.type}</li>
        <li>{pokemonName.HP}</li>
        <li>{pokemonName.attack}</li>
        <li>{pokemonName.defense}</li>
        <li>{pokemonName.height}</li>
        <li>{pokemonName.weight}</li>
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