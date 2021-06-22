const { Router } = require('express');
const { 
    getAllPokemons,
    addNewPokemon,
    getPokemonById,
    OrderAscAttack,
    OrderDescAttack,
    filtAPIPokemons,
    filtOwnPokemons,
} = require('../controllers/pokemonController');


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

router.get('/filtAPI',
    filtAPIPokemons
);

router.get('/filtOwn',
    filtOwnPokemons
);


router.post('/',
    addNewPokemon
)

router.get('/:id',
 getPokemonById
)


 
module.exports = router;
