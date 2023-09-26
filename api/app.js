const express = require('express')
const app = express()
const routes = require('./routes/index')
const cors = require('cors')

app.use(cors())

routes(app)


app.listen(5000, () => {

    console.log('servidor no ar')
})

module.exports = app

