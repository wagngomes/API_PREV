const database = require('../models')

class RegistrosController{

    
    static async criaRegistro(req, res){
    
        try{
            const dadosRegistro = req.body
            const novoRegistro = await database.registros.create(dadosRegistro)
            return res.status(200).json(novoRegistro)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }


}

module.exports = RegistrosController