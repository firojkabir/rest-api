const express = require('express')

const router = require('./routes/index')

const logger = require('./helper/logger')

const sequelizeDb = require('./sequelize/models/index');
sequelizeDb.sequelize.sync();

const app = express()

app.use(express.json())

app.use(logger)

app.use('/api', router)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`))
