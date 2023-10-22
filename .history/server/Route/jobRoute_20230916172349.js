import { Router } from "express";

import {
  createJob,
  getJobs,
  getJobById,
  updateJobById,
  delJobById,
} from "../controller/jobController.js";

const router = Router();

router
.post("/", createJob)
.get("/all-jobs",getJobs)
.get("/job:",getJobs)
.put("/edit-job/:id")
.delete("/delete-job/:id")


export default router;
