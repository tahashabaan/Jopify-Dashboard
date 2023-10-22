import { check } from "express-validator";
import validateMidelware from "../../middlewares/validateMidelware.js";

export const createJobValidate = [
    check('company')
    .notEmpty()
    .withMessage('company is required'),
    check('location')
    .notEmpty()
    .withMessage('location is required'),
    check
    validateMidelware
]