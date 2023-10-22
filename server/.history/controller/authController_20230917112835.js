import asyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs'

import User from "../models/User.js";
import ApiError from "./../utils/apiError";

const signUp = asyncHandler(async (req, res, next) => {
  //user check user exist or not using by email
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user)
     return next(
      new ApiError({ statusCode: 402, message: "user exists alreedy...LogIn" }));
    // hash password 
    const salt = await bcrypt.genSalt(12)
    const hashPassword= bcrypt.hash(req.body.password, salt);
     req.body.password = hashPassword;
    // create user acount 
    await User.create(req.body)
    res.status(200).json({
        status: 'sucess',
        message :'user created sucessfully'  
    })

});

const signIn = asyncHandler(async (req, res, next) => {
    const { email,password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
     return next(
      new ApiError({ statusCode: 402, message: "user not exists alreedy...SignUP" })
    );
    // compare (email and password) in database 
    await User.findOne({ email , password:bcrypt.compare()});
    res.status(200).json({
        status: 'sucess',
        message :'user is logged In sucessfully'  
    })


});

export { signUp, signIn };
