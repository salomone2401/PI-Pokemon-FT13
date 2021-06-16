import {
    GET_ALL_POKEMONS,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_ERROR,
    GET_POKEMON_DETAIL,
    GET_POKEMON_NAME,
    GET_TYPES,
    GET_TYPES_POKEMONS,
    CREATE_POKEMON,
    CREATE_POKEMON_SUCCESS,
    CREATE_POKEMON_ERROR
} from '../types';

const initialState = {
    pokemons: undefined,
    error: null,
    loading: false,
    pokemonDetail: undefined,
    types: undefined,
    pokemonName: undefined,
}



function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                loading: action.payload
            }
        case GET_POKEMONS_SUCCESS:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_POKEMONS_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
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
            case CREATE_POKEMON:
                return{
                    ...state,
                    loading: action.payload
                }
                case CREATE_POKEMON_SUCCESS:
                    return{
                        ...state,
                        loading: false,
                        pokemons: action.payload
                    }
                case CREATE_POKEMON_ERROR:
                    return{
                        ...state,
                        loading: false,
                        error: action.payload
                        }
                
        default:
            return state;
    }
}

export default rootReducer;