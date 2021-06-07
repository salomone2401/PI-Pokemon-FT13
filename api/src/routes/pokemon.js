const { Router, response } = require('express');
const { getAllPokemons, addPokemon} = require('../controllers/pokemonController');
const router = Router();


router.get('/',
getAllPokemons 
);

router.post('/',
addPokemon
)


module.exports = router;
