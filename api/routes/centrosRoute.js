const {Router} = require('express')
const CentrosController = require('../controllers/CentrosController')
const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)


router.get('/centros', CentrosController.listaTodosOsCentros)
router.get('/centro/:id', CentrosController.pegaUmCentro)
router.post('/centros', CentrosController.criaCentro)
router.put('/centro/:id', CentrosController.atualizaCentro)


module.exports = router