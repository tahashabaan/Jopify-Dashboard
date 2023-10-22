import {check} from 'express-validator'
import validateMidelware from "../../middlewares/validateMidelware";


export const createUserValidate = [
    check('fName')
    .notEmpty()
    .withMessage('first_name is required')
    .isLength({min:3})
    .withMessage('first_name is required'),

    validateMidelware
]