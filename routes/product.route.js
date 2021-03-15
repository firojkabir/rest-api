const router = require('express').Router()
const controller = require('../controllers/product.controller')

router.get('/', controller.getAll)

router.get('/:id', controller.getById)

router.post('/', controller.createProduct)

router.put('/:id', controller.updateProduct)

router.delete('/:id', controller.deleteProduct)

module.exports = router