const express = require('express')
const router = require('./routes/index')
const logger = require('./helper/logger')
const { errors } = require('celebrate')
const sequelizeDb = require('./sequelize/models/index')

sequelizeDb.sequelize.sync()

const app = express()

app.use(express.json())
app.use(logger)
app.use('/api', router)

app.use(errors())

module.exports = app
