require('dotenv').config({path: __dirname + '/.env'})
const express = require('express')
const cors = require('cors')
const bodyParser =  require('body-parser')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT 
const pages = require('./router/pagesRouter')
const products = require('./router/productRouter')
const category = require('./router/categoryRouter')
const user = require('./router/userRouter')
const upload = require('./router/uploadRouter')
const mongoDB = require('./services/mongodb')
const app = express()

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))
app.use(bodyParser.urlencoded({extended: false}))

// Routes
app.use('/', pages)
app.use('/user', user)
app.use('/products', products)
app.use('/api', upload)
app.use('/api', category)


app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))