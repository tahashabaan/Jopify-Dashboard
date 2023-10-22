import { Router } from "express";

import {
  createJob,
  getJobs,
  getJobById,
  updateJobById,
  delJobById,
} from "../controller/jobController.js";

import {createJobValidate} from '../utils/validate/createJobValidate'
import { createJobValidate } from './../.history/utils/validate/jobValidate_20230917133847';

const router = Router();

router
.get("/all-jobs", getJobs)
.post('/index', createJobValidate, createJob )
.get("/job/:id", getJobById)
.put("/edit-job/:id", updateJobById)
.delete("/del-job/:id", delJobById)


export default router;
