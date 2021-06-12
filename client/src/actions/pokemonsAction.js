import {
    GET_ALL_POKEMONS
}from '../types';

import clientAxios from '../config/axios';
export function getPokemonsAction(){
    return async (dispatch) => {
        try{
            const res = await clientAxios.get('/pokemon/');
            console.log(res);
            dispatch({type:GET_ALL_POKEMONS, payload: res.data });

        }catch (error){
            console.log(error, 'la puta que te pario')
        }
    }
}

// return (dispatch) => {
//     axios.get('http://localhost:3001/pokemon').then(response => {
//       dispatch({ type: GET_ALL_POKEMONS, payload: response.data})
//     })
//   }
// }