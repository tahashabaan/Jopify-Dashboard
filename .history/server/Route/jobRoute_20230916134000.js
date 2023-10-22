import { Router } from "express";

import {createJob} from '../controller/jobController.js'

const router = Router();

router
.route('/all-jobs')
.post(createJob)


export default router;