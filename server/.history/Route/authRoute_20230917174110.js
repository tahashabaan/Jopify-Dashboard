import { Router } from "express";

import { 
      signUp, 
      signIn 
} from "../controller/authController.js";

import { 
    signUp, 
    signIn 
} from "../utils/";

const router = Router();

router.post("/signUp", signUp);
router.get("/signIn", signIn);

export default router;
