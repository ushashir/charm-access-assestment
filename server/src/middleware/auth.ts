import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserInstance } from '../model/usersModel';
// const User = require('../model/users')

const secret = process.env.JWT_SECRET as string;

export async function auth(req: Request | any, res: Response, next: NextFunction) {
    try {
        const authorization = req.headers.authorization;
        
    if (!authorization) {
        res.status(401).json({
            Error: "Kindly Sign in as a user"
        })
    }

        const token = authorization?.slice(7, authorization.length) as string;
        
    let verified = jwt.verify(token, secret);

    if (!verified) {
        return res.status(401).json({
            Error:'User not verified, cannot access this route'
        })
    }

    const { id } = verified as { [key: string]: string }
    
    const user = await UserInstance.findOne({ where: { id } })
    
    if (!user) {
        return res.status(404).json({
            Error: "User not Verified"
        })
    }

    req.user = verified
    next()
        
    } catch (error) {
        res.status(403).json({
            Message: "Not allowed"
        })
    }

    
}