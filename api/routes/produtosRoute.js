const { Router } = require('express')
const ProdutosController = require('../controllers/ProdutosController')
const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)

router.get('/produtos', ProdutosController.listaTodosOsProdutos)
router.get('/produtos/:fornecedor_id', ProdutosController.listaTodosOsProdutosPorLab)
router.get('/produto/:codigo', ProdutosController.listaProdutoPorCodigo)
router.post('/produto', ProdutosController.criaProduto)
router.put('/produto/:codigo', ProdutosController.atualizaProduto)
router.delete('/produto/:codigo', ProdutosController.apagaProduto)


module.exports = router
