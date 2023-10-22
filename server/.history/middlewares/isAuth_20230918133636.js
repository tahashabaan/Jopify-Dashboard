import  asyncHandler  from 'express-async-handler';
import jwt  from'jsonwebtoken';


export const auth = asyncHandler(async (req, res, next) => {

    //01-receive token from user 
     const auth = req.get('Authorization');
     if ()
    //02 check is valid or not
    
})