import  asyncHandler  from 'express-async-handler';

import User from '../models/User.js';

const signUp = asyncHandler(async (req, res, next) =>{
  //user check user exist or not usng 
    User.findOne
}
)
const signIn = (req, res, next) => {

}

export {signUp, signIn}