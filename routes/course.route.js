const router = require('express').Router()
const controller = require('../controllers/course.controller')

router.get('/', controller.getAll)

router.get('/:id', controller.getById)

router.post('/', controller.createCourse)

router.put('/:id', controller.updateCourse)

router.delete('/:id', controller.deleteCourse)

module.exports = router