import {check} from 'express-validator'
import validateMidelware from "../../middlewares/validateMidelware";


export const createUserValidate = [
    check('fName')
    .notEmpty()
    .withMessage(),

    validateMidelware
]