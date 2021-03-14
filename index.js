const express = require('express')
const courseController = require('./controllers/course.controller')
const bookController = require('./controllers/book.controller')
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


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`))