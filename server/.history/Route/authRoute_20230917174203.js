import { Router } from "express";

import { 
      signUp, 
      signIn 
} from "../controller/authController.js";

import { 
    signUpValidate, 
    signInValidate 
} from "../utils/validate/authValidate.js";

const router = Router();

router.post("/signUp",signUpValidate, signUp);
router.get("/signIn", signIn);

export default router;
