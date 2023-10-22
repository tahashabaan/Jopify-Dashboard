import { check } from "express-validator";

import validateMidelware from "../../middlewares/validateMidelware.js";


const signUp = [
    check('fName')
    .notEmpty()
    .withMessage('firstName is required')
    .isLength({min:3})
    .withMessage('first_name must 3 char'),
    check('lName')
    .notEmpty()
    .withMessage('lastName is required')
    .isLength({min:3})
    .withMessage('lastName must 3 char'),
    check('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('must be email'),
    check('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({min:8})
    .withMessage('password minLength 8 char'),
]

const signIn = [
    check('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('must be email'),
    check('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({min:8})
    .withMessage('password minLength 8 char'), 
]

export{signUp as signUpValidate
    , signIn}