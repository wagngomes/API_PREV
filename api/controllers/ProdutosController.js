const database = require('../models')

class ProdutosController {

    static async listaTodosOsProdutos(req, res) {
        try {
            const TodosOsProdutos = await database.Produtos.findAll()
            return res.status(200).json(TodosOsProdutos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaProdutoPorCodigo(req, res) {
        const { codigo } = req.params
        try {
            const infoProduto = await database.Produtos.findOne({
                where: { codigo },
                include: [
                    {
                        model: database.Fornecedores, 
                        attributes: ['descricao', 'planejador_id'],
                        include: [{
                            model: database.Usuarios,
                            attributes:['nome']
                        }]
                    },

                ]

            })
            return res.status(200).json(infoProduto)

        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
    static async listaTodosOsProdutosPorLab(req, res) {
        const { fornecedor_id } = req.params
        try {
            const produtosDeUmLab = await database.Produtos.findAll({ where: { fornecedor_id } })
            return res.status(200).json(produtosDeUmLab)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaProduto(req, res) {
        const dados = req.boby
        try {
            const novoProduto = await database.Produtos.create(dados)
            return res.status(200).json(novoProduto)

        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async atualizaProduto(req, res) {
        const dados = req.body
        const { codigo } = req.params
        try {
            await database.Produtos.update(dados, { where: { codigo } })
            const produtoAtualizado = await database.Produtos.findOne({ where: { codigo } })
            return res.status(200).json(produtoAtualizado)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async apagaProduto(req, res){
        const { codigo } = req.params
        try{
            await database.Produtos.destroy({where:{codigo}})
            return res.status(200).json({mensagem: `Produto ${codigo} deletado`})

        }catch(error){
            return res.status(500).json(error.message)
        }

    }

}

module.exports = ProdutosController