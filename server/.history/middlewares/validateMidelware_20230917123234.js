import {  validationResult } from('express-validator');


export default validateMiddelware = (req, res, next) => {
    const result = validationResult(req);
    res.status(400).json({error : result.array()})
}


