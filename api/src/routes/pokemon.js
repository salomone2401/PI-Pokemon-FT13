const { Router} = require('express');
const { getAllPokemons, addNewPokemon,getPokemonById, OrderAscAttack, OrderDescAttack} = require('../controllers/pokemonController');
const router = Router();


router.get('/',

getAllPokemons 
);
router.get('/orderAsc',
OrderAscAttack
);
router.get('/orderDesc',
OrderDescAttack
);


router.post('/',
addNewPokemon
)

router.get('/:id',
getPokemonById
)
router.get('/:name',
getPokemonById
)
module.exports = router;
