const router = require('express').Router()
const courseRouter = require('./course.route')
const bookRouter = require('./book.route')
const productRouter = require('./product.route')

router.use('/courses', courseRouter)
router.use('/books', bookRouter)
router.use('/products', productRouter)

module.exports = router
