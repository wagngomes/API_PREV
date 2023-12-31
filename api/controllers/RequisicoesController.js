const database = require('../models')

class RequisicoesController{

    
    static async criaRequisicao(req, res){
    
        try{
            const dadosRequisicao = req.body
            const novaRequisicao = await database.Requisicoes.create(dadosRequisicao)
            return res.status(200).json(novaRequisicao)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async listaTodasAsRequisicoes(req, res){
        const { email } = req.params

        try{

            const todasAsRequisicoes = await database.Requisicoes.findAll({where:{
                solicitante_email: email,
                tipo: 'Transferência'
            }})
            return res.status(200).json(todasAsRequisicoes)

        }catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async listaTodasAsRequisicoesDePrevisao(req, res){
        const { email } = req.params

        try{

            const todasAsRequisicoes = await database.Requisicoes.findAll({where:{
                solicitante_email: email,
                tipo: 'Previsão'
            }}) 
            return res.status(200).json(todasAsRequisicoes)

        }catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async listaTodasAsRequisicoesPorUsuario(req, res){
        const { usuario } = req.params

        try{

            const todasAsRequisicoesPorPlanejador = await database.Requisicoes.findAll({where:{
                planejador: usuario
            }})
            return res.status(200).json(todasAsRequisicoesPorPlanejador)

        }catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async listaTodasAsRequisicoesPorId(req, res){
        const { id } = req.params

        try{

            const requisicaoPorId = await database.Requisicoes.findAll({where:{
                id: id
            }})
            return res.status(200).json(requisicaoPorId)

        }catch (error) {
            return res.status(500).json(error.message)
        }
    }


}

module.exports = RequisicoesController