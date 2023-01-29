import express, {Request, Response, NextFunction } from 'express';
var router = express.Router();

import { auth } from '../middleware/auth';

import {
    SignUpUser,
    LoginUser,
} from '../controller/usersController';

router.post('/', SignUpUser);
router.post('/login', LoginUser);

export default router

