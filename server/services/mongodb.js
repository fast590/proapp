require('dotenv').config()
const mongose = require('mongoose')

const mongoUri = process.env.mongoUri

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

const mongoDB = () =>{
    mongose
        .connect(mongoUri, options)    
        .then(() => console.log('Mongodb connected...'))
        .catch(err =>console.log(err))
}
mongoDB()

module.exports = mongoDB
