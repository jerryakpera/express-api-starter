// *** MODULES ***
const express = require('express');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const createError = require('http-errors');

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

// *** NOT FOUND ***
app.use('*', (req, res, next) => [next(createError(404))]);

// *** ERROR HANDLER ***
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
});

module.exports = app;
