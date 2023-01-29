import Joi, { number } from "joi";
import jwt from "jsonwebtoken";
import { isJsxOpeningElement } from "typescript";

 
export const signUpUserSchema = Joi.object().keys
    ({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().trim().lowercase().required(),
        phone: Joi.string().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        confirmPassword: Joi.ref('password')
    }).with('password', 'confirmPassword')

export const loginUserSchema = Joi.object().keys
    ({
        email: Joi.string().trim().lowercase().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    })

    // generate token
export const generateToken = (user:{[key:string]:unknown}):unknown => {
  const pass = process.env.JWT_SECRET as string
  return jwt.sign(user,pass, {expiresIn:'7d'})
}

export const options = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};