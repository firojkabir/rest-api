const router = require('express').Router()
const controller = require('../controllers/book.controller')
const { celebrate } = require('celebrate')
const { bookSchema } = require('../schemas/book.schemas')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', celebrate(bookSchema), controller.createBook)
router.put('/:id', controller.updateBook)
router.delete('/:id', controller.deleteBook)

module.exports = router
