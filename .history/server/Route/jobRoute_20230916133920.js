import { Router } from "express";

import {createJob} from '../controller/'

const router = Router();

router
.route('/all-jobs')
.get()


export default router;