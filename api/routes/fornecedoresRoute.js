const {Router} = require('express')
const FornecedoresController = require('../controllers/FornecedoresController')

const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)

router.get('/fornecedores', FornecedoresController.listaTodosOsFornecedores)
router.get('/fornecedores/:id', FornecedoresController.listaUmForncedor)
router.post('fornecedores', FornecedoresController.criaFornecedor)
router.put('/fornecedores/:id', FornecedoresController.atualizaFornecedor)
router.delete('/fornecedores/:id', FornecedoresController.apagaFornecedor)


module.exports = router


