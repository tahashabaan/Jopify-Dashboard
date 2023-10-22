import asyncHandler from "express-async-handler";
import ApiError from "../utils/apiError";

export const auth = asyncHandler(async (req, res, next) => {
  //01-receive token from user
  const auth = req.get("Authorization");
  if (!auth)
    return next(new ApiError({ statusCode: 422, message: "not authorizated" }));
  //02 check is valid or not
   const token = auth.split('/')[1];

   const= jwt.verify(token, process.env.SECRET_KEY)
});
