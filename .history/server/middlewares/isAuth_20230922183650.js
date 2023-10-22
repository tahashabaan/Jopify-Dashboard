import asyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken';

import ApiError from "../utils/apiError.js";

export const isAuth = asyncHandler(async (req, res, next) => {
  //01-receive token from user
  const auth = req.get("Authorization");
  if (!auth)
    return next(new ApiError({ statusCode: 422, message: "not authorizated" }));
  //02 check is valid or not
  const token = auth.split("/")[1];
  const decode = jwt.verify(token, process.env.SECRET_KEY);

  if (!decode)
    return next(
      new ApiError({ statusCode: 422, message: "user not logged please logIn" })
    );
//logged In
    req.user=user;
    next();

});
