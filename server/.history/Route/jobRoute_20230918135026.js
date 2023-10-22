import { Router } from "express";

import {
  createJob,
  getJobs,
  getJobById,
  updateJobById,
  delJobById,
} from "../controller/jobController.js";

import { createJobValidate } from "../utils/validate/jobValidate.js";
import {isAuth} from '../middlewares/isAuth.js';

const router = Router();

router.use(isAuth)
router
  .get("/all-jobs", getJobs)
  .post("/index", createJobValidate, createJob)
  .get("/job/:id", getJobById)
  .put("/edit-job/:id", updateJobById)
  .delete("/del-job/:id", delJobById);

export default router;
