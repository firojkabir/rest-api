const express = require('express')

const courseRouter = require('./routes/course.route')
const bookRouter = require('./routes/book.route')
const productRouter = require('./routes/product.route')

const logger = require('./helper/logger')

const sequelizeDb = require('./sequelize/models/index');
sequelizeDb.sequelize.sync();

const app = express()

app.use(express.json())

app.use(logger)

app.use('/api/courses', courseRouter)

app.use('/api/books', bookRouter)

app.use('/api/products', productRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`))