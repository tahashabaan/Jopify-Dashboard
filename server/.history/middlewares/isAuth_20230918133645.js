import  asyncHandler  from 'express-async-handler';


export const auth = asyncHandler(async (req, res, next) => {

    //01-receive token from user 
     const auth = req.get('Authorization');
     if (!auth)
    //02 check is valid or not
    
})