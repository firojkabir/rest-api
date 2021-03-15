const { Joi } = require('celebrate')

const productSchema = {
    body: {
        name: Joi.string().required(),
        desc: Joi.string().required(),
        price: Joi.number().required()
    }
}

module.exports = {
    productSchema
}
