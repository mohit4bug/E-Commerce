const mongoose = require('mongoose')
mongoose.set('strictQuery', true)


module.exports = connect = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'Ecommerce',

    }).then(console.log('db connected!')).catch(e => console.log(e))
}
