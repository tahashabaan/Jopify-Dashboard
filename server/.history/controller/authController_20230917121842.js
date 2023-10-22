import asyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs'

import User from "../models/User.js";
import ApiError from "../utils/apiError.js";

const signUp = asyncHandler(async (req, res, next) => {
  //user check user exist or not using by email
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user)
     return next(
      new ApiError({ statusCode: 402, message: "user exists alreedy...LogIn" }));
    // hash password 
    const salt = await bcrypt.genSalt(12)
    const hashPassword= await bcrypt.hash(password, salt);
     req.body.password = hashPassword;
    // create user acount 
    await User.create(req.body)
     res.status(200).json({
        status: 'sucess',
        message :'user created sucessfully'  
    })

});

const signIn = asyncHandler(async (req, res, next) => {
    let { email,password } = req.body;
    console.log(email, password);

    const user = await User.findOne({ email });
    console.log(user)
    if (!user)
     return next(
      new ApiError({ statusCode: 402, message: "user not exists alreedy...SignUP" })
    );

    // compare (email and password) in database 
    if(email !== user.email || !bcrypt.compare(password, user.password)){
    //     return next(
    //         new ApiError({ statusCode: 403, message: "email or password not correct" })
    //       );
    }
    // res.status(200).json({
    //     status: 'sucess',
    //     message :'user is logged In sucessfully'  ,
    //     user:date
    // })
});

export { signUp, signIn };
