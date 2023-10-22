import { Router } from "express";

import {
  createJob,
  getJobs,
  getJobById,
  updateJobById,
  delJobById,
} from "../controller/jobController.js";

import {createJobValidate} from ''
const router = Router();

router
.get("/all-jobs", getJobs)
.post('/index',createJob )
.get("/job/:id", getJobById)
.put("/edit-job/:id", updateJobById)
.delete("/del-job/:id", delJobById)


export default router;
