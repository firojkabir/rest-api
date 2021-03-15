const { Joi, celebrate } = require('celebrate')

const bookSchema = {
    body: {
        title: Joi.string().required(),
        author: Joi.string().required()
    }
}

module.exports = {
    bookSchema
}
