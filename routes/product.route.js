const router = require('express').Router()
const controller = require('../controllers/product.controller')
const { celebrate } = require('celebrate')
const { productSchema } = require('../schemas/product.schemas')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', celebrate(productSchema), controller.createProduct)
router.put('/:id', controller.updateProduct)
router.delete('/:id', controller.deleteProduct)

module.exports = router
