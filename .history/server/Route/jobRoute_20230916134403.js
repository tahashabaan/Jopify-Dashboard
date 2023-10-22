import { Router } from "express";

import {createJob} from '../controller/jobController.js'

const router = Router();

router
.post(createJob)


export default router;