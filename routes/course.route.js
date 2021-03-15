const router = require('express').Router()
const controller = require('../controllers/course.controller')
const { celebrate } = require('celebrate')
const { courseSchema } = require('../schemas/course.schemas')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', celebrate(courseSchema), controller.createCourse)
router.put('/:id', controller.updateCourse)
router.delete('/:id', controller.deleteCourse)

module.exports = router
