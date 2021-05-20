require('dotenv').config({path: __dirname + '/.env'})
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser =  require('body-parser')
const PORT = process.env.PORT 
const pages = require('./router/pages')
const products = require('./router/product')
const user = require('./router/user')

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', pages)
app.use('/user', user)
app.use('/products', products)

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))