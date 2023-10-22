import {validationResult} from 'express-validator';


 const validateMiddelware = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.empty()){
     return res.status(400).json({errors : result.array()})
    }

    nex

}

export default validateMiddelware

