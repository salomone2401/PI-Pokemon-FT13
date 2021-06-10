const axios = require('axios')
const { Type } = require('../db')
const { response } = require('express');
const { v4: uuidv4 } = require('uuid');



// exports.getAllTypes = async (req, res, next) => {
//     try {
//         const api = await axios.get('https://pokeapi.co/api/v2/type')
//         res.send({
//             type: res.data.results.map(x => x.name)
//         })
//     } catch (error) {
//         next(error)
//     }
// };
exports.getAllTypes = (req, res, next) => {
    const id = uuidv4();
    const api = axios.get('https://pokeapi.co/api/v2/type/')
        .then(response => {
            let apiRes = response
            let objeto = apiRes.data.results.map(x => x.name)
            for (let i = 0; i < objeto.length; i++) {
                const typeCreated = Type.findOrCreate({
                    where: {
                        name: objeto[i],
                        id: id
                    }
                })
            }
        })
        .catch((error) => next(error))
}

