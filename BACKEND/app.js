const express = require('express')
const app = express()
const port = 3050

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const calculatorRoutes = require('./routes/calculatorRoutes');

app.use('/calculator', calculatorRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;