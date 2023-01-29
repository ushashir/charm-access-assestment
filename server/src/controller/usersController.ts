import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import { UserInstance } from "../model/usersModel";
import { signUpUserSchema, options, loginUserSchema } from "../utils/utils";
import { generateToken } from '../utils/utils' 
import bcrypt from 'bcrypt';
import { any } from "joi";
  
export async function SignUpUser(req: Request, res: Response, next: NextFunction) {
  let id = uuidv4();
  try {
    const validationUser = signUpUserSchema.validate(req.body, options);
    if (validationUser.error) {
      return res.status(400).json({
        error: validationUser.error.details[0].message,
      });
    }
    const pwHash = await bcrypt.hash(req.body.password,8)
    const duplicateEmail =  await UserInstance.findOne({where: {email: req.body.email}})
        if(duplicateEmail){
            res.status(409).json({
                msg:"Email already exist"
            })
        }
    const record = await UserInstance.create({
      id: id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: pwHash,
    });
    res.status(201);
    res.json({
      message: "Signup Successful",
      record,
    });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

export async function LoginUser(req: Request, res: Response, next: NextFunction) {
  const id = uuidv4();
  try {
    const validationResult = loginUserSchema.validate(req.body, options);
      if (validationResult.error) {
        return res.status(400).json({
          error: validationResult.error.details[0].message,
        });
      }
    const User = await UserInstance.findOne({ where: { email: req.body.email } }) as unknown as { [key: string]: string }
    const { id } = User;
    const token = generateToken({ id })
    const validUser = await bcrypt.compare(req.body.password, User.password)

     if (!validUser) {
      res.status(401).json({
        message: "Incorrect Password",
        token,
        User
      })
    } 
    if (validUser) {
      // res.cookie("token", token, {
      //   maxAge: 1000 * 60 * 60 * 24 * 7,
      //   sameSite: "strict",
      //   httpOnly: true,
      // });
      //   res.cookie("id",id, {
      //     maxAge: 1000 * 60 * 60 * 24 * 7,
      //     sameSite: "strict",
      //     httpOnly: true,
      //   })
      res.status(201).json({
      message: "Login Successful",
      token,
      User
      })
    } 
  } catch (error) {
    res.status(500);
  }
}
