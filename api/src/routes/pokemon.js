const { Router} = require('express');
const { getAllPokemons, addPokemon,getPokemonById} = require('../controllers/pokemonController');
const router = Router();

// Área donde se verá el listado de pokemons. Al iniciar deberá cargar los primeros resultados 
// obtenidos desde la ruta GET /pokemons y deberá mostrar su:
// Imagen
// Nombre
// Tipos (Electrico, Fuego, Agua, etc)
router.get('/',
getAllPokemons 
);

router.post('/',
addPokemon
)

router.get('/:id',
getPokemonById
)
router.get(`/?name=${req.params.page}`,
)
module.exports = router;
