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
.route
.post("/", createUser)
.get("/all-jobs", getUsers)
.get("/job/:id", getUserById)
.put("/edit-job/:id", updateUserById)
.delete("/del-job/:id", delUserById)

