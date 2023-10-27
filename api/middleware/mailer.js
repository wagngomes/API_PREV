const nodemailer = require('nodemailer')
const SMTP_CONFIG = require('../config/smtp')
const { text } = require('body-parser')

const transport = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    //secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    //tls: {
    //    rejectUnauthorized: false
    //}

})

class mailSender{


    
    static async enviaEmail(req, res){
        const mailSent = await transport.sendMail({
            text: 'texto da mensgem',
            subject: 'Assunto do email',
            from: 'planejamento<planejamento_prev_wsistemas@outlook.com>',
            to: ['wagner.gomes@viveo.com.br'],
            html: '<h1>olá<h1>'
    
        })

        console.log("email enviado")
    }

}

module.exports = mailSender
