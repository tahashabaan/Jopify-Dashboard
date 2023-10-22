import { check } from "express-validator";
import validateMidelware from "../../middlewares/validateMidelware";

export const createJobValidate = [
    check('company')
    .notEmpty()
    .withMessage('company is required'),
    check('location')
    .notEmpty()
    .withMessage('location is required'),


    validateMidelware
]