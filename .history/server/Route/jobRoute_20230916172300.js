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
.get("/all-jobs",getJobs);
.put("/edit-job/:id")
.dele("/edit-job/:id")


export default router;
