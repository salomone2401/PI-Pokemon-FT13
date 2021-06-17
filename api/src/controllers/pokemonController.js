const { Pokemon } = require('../db')
const axios = require('axios')
const { v4: uuidv4 } = require('uuid');
const { Type } = require('../db')


exports.addNewPokemon = async (req, res, next) => {
    const id = uuidv4();
    const { name, healthpoints, attack, defense, speed, height, weight, type } = req.body
    const newPokemon = await Pokemon.findOrCreate({
        where: { id, name, healthpoints, attack, defense, speed, height, weight}
    })

    let typePokemon = await Type.findAll({
        where: { name: type },
        default: { name: type } })
    await newPokemon[0].addTypes(typePokemon)
    res.send('pokemon created')
}



exports.getAllPokemons = async (req, res, next) => {
    try {
        const api = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=4')
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
                type: apiRes.data.types.map(e => e.type.name).toString()
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



exports.OrderAscAttack = async (req, res, next) => {
    try {
        const api = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=4')
        const mine = await Pokemon.findAll({
            order: [
                ['attack', 'DESC'],
            ],
            attributes: ['id', 'name', 'attack']
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
                attack: apiRes.data.stats[1].base_stat,
            }
            info.push(object)
        }
        const hola = info.concat(mine)
        hola.sort((a, b) => (a.attack > b.attack) ? 1 : ((b.attack > a.attack) ? -1 : 0))
        res.send(hola)
    } catch (error) {
        next(error);
    }
};

exports.OrderDescAttack = async (req, res, next) => {
    try {
        const api = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=4')
        const mine = await Pokemon.findAll({
            order: [
                ['attack', 'DESC'],
            ],
            attributes: ['id', 'name', 'attack']
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
                attack: apiRes.data.stats[1].base_stat,
            }
            info.push(object)
        }
        const hola = info.concat(mine)
        hola.sort((a, b) => (a.attack < b.attack) ? 1 : ((b.attack < a.attack) ? -1 : 0))

        res.send(hola)

    } catch (error) {
        next(error);
    }
};

// exports.OrderDescAttack = async (req, res, next) => {
//     try {
//         const api = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=4')
//         const mine = await Pokemon.findAll({
//             order: [
//                 ['attack', 'DESC'],
//             ],
//             attributes: ['id', 'name', 'attack']
//         });
//         let respuesta = api.data.results
//         let info = [];
//         for (let i = 0; i < respuesta.length; i++) {
//             const apiRes = await axios.get(`${respuesta[i].url}`)
//             let object = {
//                 id: respuesta[i].url.split('/')[6],
//                 img: apiRes.data.sprites.other.dream_world.front_default,
//                 name: apiRes.data.name,
//                 type: apiRes.data.types.map(x => x.type.name),
//                 attack: apiRes.data.stats[1].base_stat,
//             }
//             info.push(object)
//         }
//         const hola = info.concat(mine)
//         hola.sort((a, b) => (a.attack < b.attack) ? 1 : ((b.attack < a.attack) ? -1 : 0))

//         res.send(hola)

//     } catch (error) {
//         next(error);
//     }
// };



// const { name, healthpoints, attack, defense, speed, height, weight, type } = req.body