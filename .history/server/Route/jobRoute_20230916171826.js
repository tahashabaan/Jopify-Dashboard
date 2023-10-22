import { Router } from "express";

import {createJob} from '../controller/jobController.js'

const router = Router();

router
.post('/add-job', createJob)
.get)


export default router;