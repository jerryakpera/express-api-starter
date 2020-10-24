// *** MODULES ***
const express = require('express');
const bodyParser = require('body-parser');
const responseTime = require('response-time');

// *** MIDDLEWARES ***
const httpLogger = require('./middleware/logger');
const corsMiddleware = require('./middleware/cors');

// *** START EXPRESS APP ***
const app = express();

// *** LOGGER ***
app.use(httpLogger);
// *** BODY PARSER ***
app.use(bodyParser.json());
// *** RESPONSE TIME ***
app.use(responseTime());
// *** CORS ***
app.options('*', corsMiddleware);
app.use(corsMiddleware);

// *** ROUTES ***
app.get('/', (req, res) => {
  res.send('Hello world!');
});

module.exports = app;
