import { Router } from "express";

import {
  createJob,
  getJobs,
  getJobById,
  updateJobById,
  delJobById,
  stat
} from "../controller/jobController.js";

import { createJobValidate } from "../utils/validate/jobValidate.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = Router();

router.use(isAuth);

router
  .post("/index", createJobValidate, createJob)
  .get("/all-jobs", getJobs)
  .get("/job/:id", getJobById)
  .put("/edit-job/:id", updateJobById)
  .delete("/del-job/:id", delJobById)
  .get('/stats', )

export default router;
