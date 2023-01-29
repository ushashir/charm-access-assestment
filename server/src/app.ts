import createError from 'http-errors';
import express, {Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import db from './config/db.config';
import cors from 'cors'

import usersRouter from './routes/usersRoute';

db.sync().then(() => {
  console.log('Database connected');
  
}).catch(err => {
  console.log(err)
});

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', usersRouter);

app.use(function(req: Request, res: Response, next) {
  next(createError(404));
});

app.use(function(err: { message: string; status: number; }, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

export default app;
