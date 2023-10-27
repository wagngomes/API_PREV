const { Router } = require('express')
const mailService = require('../middleware/mailer')

const router = Router()

router.post('/mailSend', mailService.enviaEmail)

module.exports = router