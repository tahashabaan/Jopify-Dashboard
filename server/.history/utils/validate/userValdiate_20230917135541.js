import {check} from 'express-validator'
import validateMidelware from "../../middlewares/validateMidelware";


export const createUserValidate = [
    check('fName')
    .notEmpty()
    .withMessage('firstName is required')
    .isLength({min:3})
    .withMessage('first_name must 3 char'),
    check('fName')
    .notEmpty()
    .withMessage('firstName is required')
    .isLength({min:3})
    .withMessage('first_name must 3 char'),

    validateMidelware
]