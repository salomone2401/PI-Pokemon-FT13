const { Pokemon } = require('../db')
const axios = require('axios')
const { v4: uuidv4 } = require('uuid');
const Type = require('../models/Type');



// exports.addPokemon = async (req, res, next) => {
//     const id = uuidv4();
//     const {name, healthpoints, attack, defense, speed, height, weight, type} = req.body
//     try {
//     const newPokemon = await Pokemon.findOrCreate({
//         where: {
//             name,
//             healthpoints,
//             attack, 
//             defense, 
//             speed, 
//             height, 
//             weight
//         }
//     })
//     for (let i = 0; i < type.length; i++) {
//        let typen = await Type.findAll({
//            where: {
//                name: type[i]
//            }
//        })
//        await newPokemon[0].addPokemon(typen)
        
//     }
//         return res.send('pokemon created');
//     } catch (error) {
//         next(error);
//     }
// };
// select name, 


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


exports.getAllPokemons = async (req, res, next) => {
    try {
        const api = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=3')
        const mine = await Pokemon.findAll({
            attributes: ['id', 'name']
        });
        let respuesta = api.data.results
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
        res.send(info.concat(mine))
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
        .catch(err =>
            res.status(404).send('there isnt a pokemon with that name'))
};


