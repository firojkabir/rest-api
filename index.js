const express = require('express')
const controller = require('./helper/controller')
const logger = require('./helper/logger')

const app = express()

app.use(express.json())

app.use(logger)

app.get('/api/courses', controller.getAll)

app.get('/api/courses/:id', controller.getById)

app.post('/api/courses', controller.createCourse)

app.put('/api/courses/:id', controller.updateCourse)

app.delete('/api/courses/:id', controller.deleteCourse)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`))