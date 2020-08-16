const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
// const commentRouter = require('./routes/comment');
const boardRouter = require('./routes/board');
const registerRouter = require('./routes/register');
const reactRouter = require('./routes/react');


const app = express();

app.use(express.static(path.join(__dirname, "..", "frontend/build")));
// app.set('view engine', 'ejs');

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/users', usersRouter);
app.use('/api/board', boardRouter);
app.use('/api/register', registerRouter);
app.use('/api/auth', authRouter);
app.use('/*', reactRouter);
// app.use('/', indexRouter);
// app.use('/', reactRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  // res.render('error');
});

module.exports = app;


