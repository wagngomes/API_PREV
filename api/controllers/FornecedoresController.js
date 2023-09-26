const database = require('../models')


class FornecedoresController {

    static async listaTodosOsFornecedores(req, res) {
        try{
            const todosOsFornecedores = await database.Fornecedores.findAll()
                return res.status(200).json(todosOsFornecedores)            
        }catch(error){
                return res.status(500).json(error.message)

        }  
    }

    static async listaUmForncedor(req, res) {
        try{
            const {id} = req.params
            const umFornecedor = await database.Fornecedores.findOne({where:{id}})
                return res.status(200).json(umFornecedor)
        }catch(error){
                return res.status(500).json(error.message)
        }
    }

    static async criaFornecedor(req, res){
        try{
            const newFornecedor = req.body
            const novoFornecedor = await database.Fornecedores.create(newFornecedor)
            return res.status(200).json(novoFornecedor)

        }catch(error){
                return res.status(500).json(error.message)
        }
    }

    static async atualizaFornecedor(req, res){
        const newData = req.body
        const {id} = req.params
    try{

        await database.Fornecedores.update(newData, {where:{id}})
        const fornecedorAtulizado = await database.Fornecedores.findOne({where:{id}})
        return res.status(200).json(fornecedorAtulizado)

    }catch(error){
        return res.status(500).json(error.message)
        }
    }

    static async apagaFornecedor(req, res){
        const {id} = req.params
        try{
            await database.Fornecedores.destroy({where:{id}})
            return res.status(200).json({mensagem: `Fornecedor ${id} deletado`})

        }catch(error){
            return res.status(500).json(error.message)
        }

    }




}

module.exports = FornecedoresController
