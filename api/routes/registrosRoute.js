const { Router } = require('express')
const RegistrosController = require('../controllers/RegistrosController')
const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)

router.post('/registros', RegistrosController.criaRegistro)


module.exports = router



