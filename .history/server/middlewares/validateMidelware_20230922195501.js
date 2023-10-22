import {validationResult} from 'express-validator';


 const validateMiddelware = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmptyempty()){
     return res.status(408).json({errors : result.array()})
    }

    next();

}

export default validateMiddelware

