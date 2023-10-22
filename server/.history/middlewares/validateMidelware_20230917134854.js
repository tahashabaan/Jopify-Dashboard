import {validationResult} from 'express-validator';


export default cosvalidateMiddelware = (req, res, next) => {
    const result = validationResult(req);
    res.status(400).json({errors : result.array()})
}


