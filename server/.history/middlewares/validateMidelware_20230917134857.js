import {validationResult} from 'express-validator';


export default const validateMiddelware = (req, res, next) => {
    const result = validationResult(req);
    res.status(400).json({errors : result.array()})
}


