import  asyncHandler  from 'express-async-handler';

import User from '../models/User.js';

const signUp = asyncHandler(async (req, res, next) =>{
  //user check user exist or not using by email
    const {email} = req.body;
    await User.findOne({email});
})
const signIn =  asyncHandler(async(req, res, next) => {

})

export {signUp, signIn}