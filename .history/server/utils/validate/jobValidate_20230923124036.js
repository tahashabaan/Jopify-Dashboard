// import slugify from 'slugify'
import { check } from "express-validator";

import validateMidelware from "../../middlewares/validateMidelware.js";

export const createJobValidate = [
    check('company')
    .notEmpty()
    .withMessage('company is required'),
    check('position')
    .notEmpty()
    .withMessage('position is required'),
    // .custom((val,{req} )=> {
    //      req.body.slug= slugify(val)
    // }),
    check('location')
    .notEmpty()
    .withMessage('location is required'),
    check("userId")
    .notEmpty()
    .withMessage('userID is required')
    .isMongoId()
    .withMessage('userID must be ObjectId'),
    check('status')
    .optional(),
    check('Type')
    .optional(),
    validateMidelware
]



