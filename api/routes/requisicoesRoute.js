const { Router } = require('express')
const RequisicoesController = require('../controllers/RequisicoesController')

const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)

router.post('/requisicoes', RequisicoesController.criaRequisicao)
router.get('/requisicoes/:email', RequisicoesController.listaTodasAsRequisicoes)
router.get('/requisicao/:usuario', RequisicoesController.listaTodasAsRequisicoesPorUsuario)

module.exports = router