const database = require('../models')

class CentrosController{

    static async listaTodosOsCentros(req, res) {
        try{
            const todosOsCentros = await database.Centros.findAll()
                return res.status(200).json(todosOsCentros)            
        }catch(error){
                return res.status(500).json(error.message)

        }  
    }

    static async pegaUmCentro(req, res) {
        const { id } = req.params
        try{
            const umCentro = await database.Centros.findOne({where:{id}})
            return res.status(200).json(umCentro)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async criaCentro(req, res) {
        const dados = req.body
        try{
            const novoCentro = await database.Centros.create(dados)
            return res.status(200).json(novoCentro)
        }catch(error){
            return res.status(500).json(error.message)
        }

    }
    static async atualizaCentro(req, res){
        const dados = req.body
        const {id} = req.params
    try{

        await database.Centros.update(dados, {where:{id}})
        const centroAtulizado = await database.Centros.findOne({where:{id}})
        return res.status(200).json(centroAtulizado)

    }catch(error){
        return res.status(500).json(error.message)
    }
}


}


module.exports = CentrosController