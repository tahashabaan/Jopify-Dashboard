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
.get("/all-jobs", getJobs)
.get("/job/:id", getJobById)
.put("/edit-job/:id", updateJobById)
.delete("/del-job/:id", delJobById)


export default router;
