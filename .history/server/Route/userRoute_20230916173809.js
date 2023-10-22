import { Router } from "express";

import {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  delUserById,
} from "../controller/userController.js";

const router = Router();

router
.post("/", createJob)
.get("/all-jobs", getJobs)
.get("/job/:id", getJobById)
.put("/edit-job/:id", updateJobById)
.delete("/del-job/:id", delJobById)

