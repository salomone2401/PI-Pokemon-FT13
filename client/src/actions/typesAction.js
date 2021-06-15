import {
   GET_TYPES,
   SHOW_TYPES_POKEMONS
}
from '../types';

import clientAxios from '../config/axios';



export function getType(){
    return async (dispatch) => {
        try{
            const res = await clientAxios.get('/type/');
            dispatch({
                type:GET_TYPES, payload: res.data });
        }catch (error){
            console.log(error)
        }
    }
}






