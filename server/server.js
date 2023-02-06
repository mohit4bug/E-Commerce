const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connect = require('./db/connect')
dotenv.config({
    path: './config/.env'
})



// Routes
app.use('/api/v1', require('./routes/ProductRoute'))






// connections
app.listen(process.env.PORT, () => (
    console.log('Server up!')
))
connect()

