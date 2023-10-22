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
.post("/", createU)
.get("/all-jobs", getUs)
.get("/job/:id", getUById)
.put("/edit-job/:id", updateUById)
.delete("/del-job/:id", delUById)

