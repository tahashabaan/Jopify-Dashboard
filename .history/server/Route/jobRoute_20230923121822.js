import { Router } from "express";

import {
  createJob,
  getJobs,
  getJobById,
  updateJobById,
  delJobById,
  statsJob,
} from "../controller/jobController.js";

import { createJobValidate } from "../utils/validate/jobValidate.js";
import { profile } from "../controller/userController.js";
import { isAuth } from "../middlewares/isAuth.js";
import upload from "../middlewares/uploadFile.js";

const router = Router();

router.use(isAuth);

router
  .post("/add-job", createJob)
  .get("/all-jobs", getJobs)
  .get("/job/:id", getJobById)
  .put("/edit-job/:id", updateJobById)
  .delete("/del-job/:id", delJobById);

router
  .get("/stats", statsJob)
  //using muluter to upload image
  .get("/profile", upload.single("profileImage"), profile);

export default router;
