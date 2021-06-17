import {
    GET_ALL_POKEMONS,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_ERROR,
    GET_POKEMON_DETAIL,
    GET_POKEMON_NAME,
    GET_TYPES_POKEMONS,
    CREATE_POKEMON,
    CREATE_POKEMON_SUCCESS,
    CREATE_POKEMON_ERROR,
    ORDER_NAME_ASC,
    ORDER_NAME_DESC,
    ORDER_ATTACK_ASC,
    ORDER_ATTACK_DESC

} from '../types';

import clientAxios from '../config/axios';


export function getPokemonsAction() {
    return async (dispatch) => {
        dispatch(downloadPokemons());
        try {
            const res = await clientAxios.get('/pokemon/');
            dispatch(downloadPokemonsSuccess(res.data));
        } catch (error) {
            console.log(error)
            dispatch(downloadPokemonsError());
        }
    }
}
const downloadPokemons = () =>({
    type: GET_ALL_POKEMONS,
    payload: true
});

const downloadPokemonsSuccess = pokemons => ({
    type: GET_POKEMONS_SUCCESS,
    payload: pokemons
});

const downloadPokemonsError = () => ({
    type: GET_POKEMONS_ERROR,
    payload: false
});




export function getPokemonDetail(id) {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get(`/pokemon/${id}`);
            dispatch({
                type: GET_POKEMON_DETAIL,
                payload: res.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}


export function getPokemonName(name) {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get(`/pokemon/${name}`);
            dispatch({
                type: GET_POKEMON_NAME,
                payload: res.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}



export function getPokemonByType(payload){
    return async (dispatch) => {
        try{
            const res = await clientAxios.get('/pokemon/');
            dispatch({
                type:GET_TYPES_POKEMONS,
                payload
            })
        }catch (error){
            console.log(error)
        }
    }
}




export function createNewPokemon(pokemon, type) {
    console.log('pPOKEMON', type)
    return async (dispatch) => {
    
        dispatch(addPokemon());
        try {
          await clientAxios.post('/pokemon', {...pokemon, type});
           
            dispatch(addPokemonSuccess(pokemon, type))
        } catch (error) {
            console.log(error);
           
            dispatch(addPokemonError(true));
        }
    }
}

const addPokemon = () => ({
    type: CREATE_POKEMON,
    payload: true
});
const addPokemonSuccess = (pokemon, type) => ({
    type: CREATE_POKEMON_SUCCESS,
    payload: {
        pokemon, 
        type
    }
});

const addPokemonError = estado => ({
    type: CREATE_POKEMON_ERROR,
    payload: estado
});




export function orderNameAsc() {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get('/pokemon/');
            dispatch({
                type: ORDER_NAME_ASC,
                payload: res.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function orderNameDesc() {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get('/pokemon/');
            dispatch({
                type: ORDER_NAME_DESC,
                payload: res.data
            });

        } catch (error) {
            console.log(error)
        }
    }
}


export function orderAttackAsc() {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get('/pokemon/orderAsc');
            dispatch({
                type: ORDER_ATTACK_ASC,
                payload: res.data
            });

        } catch (error) {
            console.log(error)
        }
    }
}

export function orderAttackDesc() {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get('/pokemon/orderDesc');
            dispatch({
                type: ORDER_ATTACK_DESC,
                payload: res.data
            });

        } catch (error) {
            console.log(error)
        }
    }
}