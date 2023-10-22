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
.route('/user')
.post(createUser)
.get(getUsers)
router
.route('/:id')
.get(getUserById)
.put(updateUserById)
.delete(delUserById)

export default router

