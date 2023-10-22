import { Router } from "express";

import {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  delUserById,
} from "../controller/userController.js";

import {createUserValidate} from '../utils/validate/userValdiate.js'
import {isAuth} from '../middlewares/isAuth.js'


const router = Router();

router
.route('/')
.post(createUserValidate, createUser)
.get(getUsers)
router
.route('/:id')
.get(getUserById)
.put(updateUserById)
.delete(delUserById)

export default router

