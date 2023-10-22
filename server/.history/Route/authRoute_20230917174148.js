import { Router } from "express";

import { 
      signUp, 
      signIn 
} from "../controller/authController.js";

import { 
    signUpValidate, 
    signIn 
} from "../utils/validate/authValidate.js";

const router = Router();

router.post("/signUp", signUp);
router.get("/signIn", signIn);

export default router;
