const { Router, response } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const PokemonRoute = require('./pokemon')
const TypeRoute = require('./type')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemon', PokemonRoute)
router.use('/type', TypeRoute)

module.exports = router;
