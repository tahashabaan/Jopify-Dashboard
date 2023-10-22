import { Router } from "express";

import { signUp, signIn } from "../controller/authController.js";

import {
  signUpValidate,
  signInValidate,
} from "../utils/validate/authValidate.js";

const router = Router();

router.post("/signUp", signUpValidate, signUp);
router.pos("/signIn", signInValidate, signIn);

export default router;
