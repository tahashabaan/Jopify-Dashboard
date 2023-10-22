import {check} from 'express-validator'
import validateMidelware from "../../middlewares/validateMidelware.js";


export const createUserValidate = [
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
    check('image')
    .optional(),
    check('password')
    .optional(),
    validateMidelware
]


export const updateUserValidate = [
    check('fName')
    .optional()
    .isLength({min:3})
    .withMessage('first_name must 3 char'),
    check('lName')
    .optional()
    .isLength({min:3})
    .withMessage('lastName must 3 char'),
    check('email')
    .optional()
    .isEmail()
    .withMessage('must be email'),
    check('image')
    .optional(),
    validateMidelware
]




