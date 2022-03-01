


import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser'
import createError from "http-errors";
import * as path from "path";



const app = express();
import indexRouter from'./App.Router';

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/get', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) =>{
    next(createError(404));
});
/*
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    console.log(err);
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});*/

export default app;
