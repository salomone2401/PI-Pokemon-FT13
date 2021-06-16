const { Router} = require('express');
const {getAllTypes, saveTypes } = require('../controllers/typeController');
const router = Router();

// GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y 
// guardarlos en su propia base de datos y luego ya utilizarlos desde allí

router.get('/',
getAllTypes

);

module.exports = router;



// {
//     "id": 1,
//     "name": "normal",
//     "createdAt": "2021-06-16T13:23:51.352Z",
//     "updatedAt": "2021-06-16T13:23:51.352Z"
// },
// {
//     "id": 2,
//     "name": "fighting",
//     "createdAt": "2021-06-16T13:23:51.990Z",
//     "updatedAt": "2021-06-16T13:23:51.990Z"
// },
// {
//     "id": 3,
//     "name": "flying",
//     "createdAt": "2021-06-16T13:23:52.546Z",
//     "updatedAt": "2021-06-16T13:23:52.546Z"
// },
// {
//     "id": 4,
//     "name": "poison",
//     "createdAt": "2021-06-16T13:23:53.328Z",
//     "updatedAt": "2021-06-16T13:23:53.328Z"
// },
// {
//     "id": 5,
//     "name": "ground",
//     "createdAt": "2021-06-16T13:23:53.940Z",
//     "updatedAt": "2021-06-16T13:23:53.940Z"
// },
// {
//     "id": 6,
//     "name": "rock",
//     "createdAt": "2021-06-16T13:23:54.648Z",
//     "updatedAt": "2021-06-16T13:23:54.648Z"
// },
// {
//     "id": 7,
//     "name": "bug",
//     "createdAt": "2021-06-16T13:23:55.261Z",
//     "updatedAt": "2021-06-16T13:23:55.261Z"
// },
// {
//     "id": 8,
//     "name": "ghost",
//     "createdAt": "2021-06-16T13:23:55.881Z",
//     "updatedAt": "2021-06-16T13:23:55.881Z"
// },
// {
//     "id": 9,
//     "name": "steel",
//     "createdAt": "2021-06-16T13:23:56.493Z",
//     "updatedAt": "2021-06-16T13:23:56.493Z"
// },
// {
//     "id": 10,
//     "name": "fire",
//     "createdAt": "2021-06-16T13:23:57.211Z",
//     "updatedAt": "2021-06-16T13:23:57.211Z"
// },
// {
//     "id": 11,
//     "name": "water",
//     "createdAt": "2021-06-16T13:23:57.823Z",
//     "updatedAt": "2021-06-16T13:23:57.823Z"
// },
// {
//     "id": 12,
//     "name": "grass",
//     "createdAt": "2021-06-16T13:23:58.444Z",
//     "updatedAt": "2021-06-16T13:23:58.444Z"
// },
// {
//     "id": 13,
//     "name": "electric",
//     "createdAt": "2021-06-16T13:23:59.023Z",
//     "updatedAt": "2021-06-16T13:23:59.023Z"
// },
// {
//     "id": 14,
//     "name": "psychic",
//     "createdAt": "2021-06-16T13:23:59.671Z",
//     "updatedAt": "2021-06-16T13:23:59.671Z"
// },
// {
//     "id": 15,
//     "name": "ice",
//     "createdAt": "2021-06-16T13:24:00.286Z",
//     "updatedAt": "2021-06-16T13:24:00.286Z"
// },
// {
//     "id": 16,
//     "name": "dragon",
//     "createdAt": "2021-06-16T13:24:00.905Z",
//     "updatedAt": "2021-06-16T13:24:00.905Z"
// },
// {
//     "id": 17,
//     "name": "dark",
//     "createdAt": "2021-06-16T13:24:01.713Z",
//     "updatedAt": "2021-06-16T13:24:01.713Z"
// },
// {
//     "id": 18,
//     "name": "fairy",
//     "createdAt": "2021-06-16T13:24:02.328Z",
//     "updatedAt": "2021-06-16T13:24:02.328Z"
// },
// {
//     "id": 10001,
//     "name": "unknown",
//     "createdAt": "2021-06-16T13:24:02.940Z",
//     "updatedAt": "2021-06-16T13:24:02.940Z"
// },
// {
//     "id": 10002,
//     "name": "shadow",
//     "createdAt": "2021-06-16T13:24:03.553Z",
//     "updatedAt": "2021-06-16T13:24:03.553Z"
// }
// ]