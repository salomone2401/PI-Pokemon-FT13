const axios = require('axios')
const { response } = require('express');

exports.getAllTypes = (req, res, next) => {
    const api = axios.get('https://pokeapi.co/api/v2/type/')
    .then(response => {
        let apiRes = response
        return res.send(
            apiRes.data.results.map(x => x.name)
        )
    })
    .catch((error) => next(error))
};
