const router = require('express').Router()
const controller = require('../controllers/book.controller')

router.get('/', controller.getAll)

router.get('/:id', controller.getById)

router.post('/', controller.createBook)

router.put('/:id', controller.updateBook)

router.delete('/:id', controller.deleteBook)

module.exports = router