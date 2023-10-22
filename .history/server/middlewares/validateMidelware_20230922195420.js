import {validationResult} from 'express-validator';


 const validateMiddelware = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.empty()){
     return res.status(40).json({errors : result.array()})
    }

    next();

}

export default validateMiddelware

