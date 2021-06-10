const { Pokemon } = require('../db')
const axios = require('axios')
const { v4: uuidv4 } = require('uuid');
const { response } = require('express');



exports.addPokemon = async (req, res, next) => {
    const id = uuidv4();
    const pokemonBody = {
        ...req.body,
        id
    };
    try {
        const createdPokemon = await Pokemon.create(pokemonBody);
        console.log(createdPokemon)
        return res.send(createdPokemon);
    } catch (error) {
        next(error);
    }
};

// exports.getAllPokemons = async (req, res, next) => {
//     try {
//         info = [];
//         nombre = req.query.name;
//         const api = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=40')
//         let response = api.data.results
//         if (!req.params.name)
//             for (let i = 0; i < response.length; i++) {
//                 const api2 = axios.get(`${response[i].url}`)
//                 let object = {
//                     id: response[i].url.split('/')[6],
//                     name: api2.data.name,
//                     img: api2.data.sprites.official - artwork.front_default,
//                     type: api2.types.map(x => x.type.name)}
//                 info.push(object)}
//         return res.send(info);
//     }
// }).catch((error) => next(error))

exports.getAllPokemons = async (req, res, next) => {
    try {
        const api = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=40')
        let respuesta = api.data.results
        if (!req.query.name) {
            let info = [];
            for (let i = 0; i < respuesta.length; i++) {
                const apiRes = await axios.get(`${respuesta[i].url}`)
                let object = {
                    id: respuesta[i].url.split('/')[6],
                    img: apiRes.data.sprites.other.dream_world.front_default,
                    name: apiRes.data.name,
                    type: apiRes.data.types.map(x => x.type.name),
                }
                info.push(object)
            }
            res.send(info)
        } else {
            console.log('NO FUNCIONAAA ')
        }
    } catch (error) {
        next(error);
    }
};


exports.getPokemonById = (req, res, next) => {
    const api = axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
        .then(response => {
            let apiRes = response
            return res.send(
                {
                    id: apiRes.data.id,
                    img: apiRes.data.sprites.other.dream_world.front_default,
                    name: apiRes.data.name,
                    type: apiRes.data.types.map(x => x.type.name),
                    HP: apiRes.data.stats[0].base_stat,
                    attack: apiRes.data.stats[1].base_stat,
                    defense: apiRes.data.stats[2].base_stat,
                    speed: apiRes.data.stats[5].base_stat,
                    height: apiRes.data.height,
                    weight: apiRes.data.weight
                })
        })
        .catch((error) => next(error))
};



// app.get('/giraffe/:number', (req, res) => {
//     console.log(req.params.number)
//    })

exports.getPokemonByName = (req, res, next) => {
    const api = axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`)
        .then(response => {
            let apiRes = response
            return res.send(
                {
                    id: apiRes.data.id,
                    img: apiRes.data.sprites.other.dream_world.front_default,
                    name: apiRes.data.name,
                    type: apiRes.data.types.map(x => x.type.name),
                    stats: apiRes.data.stats.filter(item => item.stat),
                    height: apiRes.data.height,
                    weight: apiRes.data.weight
                })
        })
        .catch((error) => next(error))
};

