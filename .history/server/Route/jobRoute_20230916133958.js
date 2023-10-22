import { Router } from "express";

import {createJob} from '../controller/jobController.js'

const router = Router();

router
.route('/all-jobs')
.pos(createJob)


export default router;