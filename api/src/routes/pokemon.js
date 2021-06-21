const { Router } = require('express');
const { 
    getAllPokemons,
    addNewPokemon,
    getPokemonById,
    OrderAscAttack,
    OrderDescAttack,
    filtAPIPokemons,
    filtOwnPokemons,
    filtByType,
    buscar
} = require('../controllers/pokemonController');


const router = Router();


router.get('/', 
getAllPokemons
);

router.get('/buscar',
buscar
)



router.get('/orderAsc',
    OrderAscAttack
);
router.get('/orderDesc',
    OrderDescAttack
);

router.get('/filtAPI',
    filtAPIPokemons
);


// router.get('/filtType',
// filtByType
// )
router.get('/filtOwn',
    filtOwnPokemons
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
