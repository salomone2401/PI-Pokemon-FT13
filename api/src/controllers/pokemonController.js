const { Pokemon } = require('../db')
const axios = require('axios')
const { v4: uuidv4 } = require('uuid');


// async function getPokemonTypes(req, res, next) {
//     const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
//         .then((response) => {
//             let pokemonResponse = response;

//             console.log('esto se esta impriminedo')
//             return res.send(
//                 pokemonResponse.data.types.map(x => x.type)
//             );
//         })
//         .catch((error) => next(error))
// }

exports.addPokemon = async (req, res, next) => {
    const id = uuidv4();
    const pokemonBody = {...req.body, id};

    try {
        const createdPokemon = await Pokemon.create(pokemonBody);
        return res.send(createdPokemon);
    } catch (error) {
        next(error);
    }
}

exports.getAllPokemons = (req, res, next) => {
    const pokemonApi = axios.get('https://pokeapi.co/api/v2/pokemon')
    const pokemonCreated = Pokemon.findAll()
    Promise.all([pokemonApi, pokemonCreated])
        .then((response) => {
            let [pokemonApiRes, pokemonCreatedRes] = response;
            return res.send(
                pokemonCreatedRes.concat(pokemonApiRes.data.results.map(x => x.name).slice(0, 12))
                // getPokemonTypes());
            )
        })
        .catch((error) => next(error))
}





