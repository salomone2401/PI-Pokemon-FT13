import {
    GET_ALL_POKEMONS,
    GET_POKEMON_DETAIL,
    GET_POKEMON_NAME,
    GET_TYPES,
    GET_TYPES_POKEMONS
} from '../types';

const initialState = {
    pokemons: undefined,
    pokemonDetail: undefined,
    types: undefined,
    pokemonName: undefined,
}



function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload
            }
        case GET_POKEMON_NAME:
            return {
                ...state,
                pokemonName: action.payload
            }

        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case GET_TYPES_POKEMONS:
            return {
                ...state,
                pokemons: state.pokemons.filter(pokemon =>
              pokemon.type == action.payload) 
            }
        default:
            return state;
    }
}

export default rootReducer;