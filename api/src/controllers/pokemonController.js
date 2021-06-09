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

exports.getAllPokemons = (req, res, next) => {
    const api = axios.get('https://pokeapi.co/api/v2/pokemon')
    const created = Pokemon.findAll()
    Promise.all([api, created])
        .then((response) => {
            let [apiRes, createdRes] = response;
            return res.send(
                createdRes.concat(apiRes.data.results.map(x => x.name).slice(0, 12))
            )
        })
        .catch((error) => next(error))
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
                stats: apiRes.data.stats.filter(item => item.stat),
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

