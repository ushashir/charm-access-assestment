"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = exports.SignUpUser = void 0;
const uuid_1 = require("uuid");
const usersModel_1 = require("../model/usersModel");
const utils_1 = require("../utils/utils");
const utils_2 = require("../utils/utils");
const bcrypt_1 = __importDefault(require("bcrypt"));
async function SignUpUser(req, res, next) {
    let id = (0, uuid_1.v4)();
    try {
        const validationUser = utils_1.signUpUserSchema.validate(req.body, utils_1.options);
        if (validationUser.error) {
            return res.status(400).json({
                error: validationUser.error.details[0].message,
            });
        }
        const pwHash = await bcrypt_1.default.hash(req.body.password, 8);
        const duplicateEmail = await usersModel_1.UserInstance.findOne({ where: { email: req.body.email } });
        if (duplicateEmail) {
            res.status(409).json({
                msg: "Email already exist"
            });
        }
        const record = await usersModel_1.UserInstance.create({
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
    }
    catch (error) {
        res.status(500);
        console.log(error);
    }
}
exports.SignUpUser = SignUpUser;
async function LoginUser(req, res, next) {
    const id = (0, uuid_1.v4)();
    try {
        const validationResult = utils_1.loginUserSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                error: validationResult.error.details[0].message,
            });
        }
        const User = await usersModel_1.UserInstance.findOne({ where: { email: req.body.email } });
        const { id } = User;
        const token = (0, utils_2.generateToken)({ id });
        const validUser = await bcrypt_1.default.compare(req.body.password, User.password);
        if (!validUser) {
            res.status(401).json({
                message: "Incorrect Password",
                token,
                User
            });
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
            });
        }
    }
    catch (error) {
        res.status(500);
    }
}
exports.LoginUser = LoginUser;
