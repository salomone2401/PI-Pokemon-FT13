import {
    GET_ALL_POKEMONS,
    GET_POKEMON_DETAIL
}from '../types';

import clientAxios from '../config/axios';


export function getPokemonsAction(){
    return async (dispatch) => {
        try{
            const res = await clientAxios.get('/pokemon/');
            dispatch({type:GET_ALL_POKEMONS, payload: res.data });
        }catch (error){
            console.log(error)
        }
    }
}

export function getPokemonDetail(id){
    return async (dispatch) => {
        try{
            const res = await clientAxios.get(`/pokemon/${id}`);
            
            dispatch({
                type:GET_POKEMON_DETAIL,
                payload: res.data 
            });

        }catch (error){
            console.log(error)
        }
    }
}