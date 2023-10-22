import asyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs'

import User from "../models/User.js";
import ApiError from "./../utils/apiError";

const signUp = asyncHandler(async (req, res, next) => {
  //user check user exist or not using by email
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return next(
      new ApiError({ statusCode: 402, message: "user exists alreedy" })
    );
    // hash password 
    const salt = await bcrypt.genSalt(12)
    const hashPassword= bcrypt.hash(req.bod)
     req.body.password = hashPassword;
    // create user acount 
    await User.create(req.body)

});

const signIn = asyncHandler(async (req, res, next) => {});

export { signUp, signIn };
