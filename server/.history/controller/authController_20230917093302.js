import  asyncHandler  from 'express-async-handler';

import User from '../models/User.js';

const signUp = asyncHandler(async (req, res, next) =>{
  //user founded or not 
    User.findOn
}
)
const signIn = (req, res, next) => {

}

export {signUp, signIn}