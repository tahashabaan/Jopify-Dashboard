import { Router } from "express";

import {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  delUserById,
} from "../controller/userController.js";

import {createUserValidate}

const router = Router();

router
.route('/')
.post(createUser)
.get(getUsers)
router
.route('/:id')
.get(getUserById)
.put(updateUserById)
.delete(delUserById)

export default router

