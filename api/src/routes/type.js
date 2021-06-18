const { Router} = require('express');
const {getAllTypes} = require('../controllers/typeController');
const router = Router();

// GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y 
// guardarlos en su propia base de datos y luego ya utilizarlos desde allí

router.get('/',
getAllTypes

);

module.exports = router;

