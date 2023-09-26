const database = require('../models')


class UsuariosController{

    static async listaTodosOsUsuarios(req, res) {
        try{
            const todosOsUsuarios = await database.Usuarios.findAll()
                return res.status(200).json(todosOsUsuarios)            
        }catch(error){
                return res.status(500).json(error.message)

        }  
    }

    static async mostraUsuario(req, res){
        try{
            const {email} = req.params
            const umUsuario = await database.Usuarios.findOne({where:{email}})
                return res.status(200).json(umUsuario)
        } catch(error){
                return res.status(500).json(error.message)
        }
    }

    static async criaUsuario(req, res){
    
        try{
            const newUsuario = req.body
            const novoUsuario = await database.Usuarios.create(newUsuario)
            return res.status(200).json(novoUsuario)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaUsuario(req, res){
            const newData = req.body
            const {email} = req.params
        try{

            await database.Usuarios.update(newData, {where:{email}})
            const usuarioAtulizado = await database.Usuarios.findOne({where:{email}})
            return res.status(200).json(usuarioAtulizado)

        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaUsuario(req, res){
        const {email} = req.params
        try{
            await database.Usuarios.destroy({where:{email}})
            return res.status(200).json({mensagem: `usuario ${email} deletado`})

        }catch(error){
            return res.status(500).json(error.message)
        }

    }




}

module.exports = UsuariosController