const { Joi } = require('celebrate')

const courseSchema = {
    body: {
        name: Joi.string().required(),
        prof: Joi.string().required()
    }
}

module.exports = {
    courseSchema
}
