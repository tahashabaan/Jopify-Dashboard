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

router.route()
.get("/all-jobs",getJobs);

export default router;
