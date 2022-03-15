var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var dotenv = require('dotenv');
dotenv.config();

var db = require('./database/mongoose');


var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Initialize Database
db();

// register routes
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.env === 'development' ? err : {};

  // respond with the error
  res.status(err.status || 500).send(err);
});

module.exports = app;
