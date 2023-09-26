const database = require('../models')
const { compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret')

class AuthService {

    async login(dto) {
        const usuario = await database.Usuarios.findOne({
            attributes: ['senha', 'nome', 'id', 'email'],
            where: {
                email: dto.email
            }
        })
        if(!usuario) {
            throw new Error('Usuario não cadastrado')
        }
        //const senhasIguais = await compare(dto.senha, usuario.senha)
        if (dto.senha === usuario.senha) {

            const accessToken = sign({
                id: usuario.id,
                email: usuario.email,
                user: usuario.nome
            }, jsonSecret.secret,{
                expiresIn: 86400
            })    
            return { accessToken }
        }else{
            return ('Usuario ou senha invalido')
        }
    }
}
module.exports = AuthService