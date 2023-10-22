import { Router } from "express";

import {createJob,getJobs, } from '../controller/jobController.js'

const router = Router();

router
.post('/add-job', createJob)
.get('/all-jobs', )


export default router;