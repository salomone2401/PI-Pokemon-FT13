const { Router} = require('express');
const { getAllPokemons, addNewPokemon,getPokemonById, getPokemonByName} = require('../controllers/pokemonController');
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
addNewPokemon
)

router.get('/:id',
getPokemonById
)
router.get('/:name',
getPokemonById
)
module.exports = router;
