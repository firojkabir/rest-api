const express = require('express')
const courseController = require('./controllers/course.controller')
const bookController = require('./controllers/book.controller')
const productController = require('./controllers/product.controller')
const logger = require('./helper/logger')

const sequelizeDb = require('./sequelize/models/index');
sequelizeDb.sequelize.sync();

const app = express()

app.use(express.json())

app.use(logger)

app.get('/api/courses', courseController.getAll)

app.get('/api/courses/:id', courseController.getById)

app.post('/api/courses', courseController.createCourse)

app.put('/api/courses/:id', courseController.updateCourse)

app.delete('/api/courses/:id', courseController.deleteCourse)

app.get('/api/books', bookController.getAll)

app.get('/api/books/:id', bookController.getById)

app.post('/api/books', bookController.createBook)

app.put('/api/books/:id', bookController.updateBook)

app.delete('/api/books/:id', bookController.deleteBook)

app.get('/api/products', productController.getAll)

app.get('/api/products/:id', productController.getById)

app.post('/api/products', productController.createProduct)

app.put('/api/products/:id', productController.updateProduct)

app.delete('/api/products/:id', productController.deleteProduct)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`))