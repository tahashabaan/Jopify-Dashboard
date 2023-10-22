import  asyncHandler  from 'express-async-handler';
import jwt  from'jsonwebtoken';


export const auth = asyncHandler(async (req, res, next) => {

    //01-receive token from user then check is valid or not
const auth = req.get('Authorization');
    //02
    
})