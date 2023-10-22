import { Router } from "express";

import {createJob} from '../'

const router = Router();

router
.route('/all-jobs')
.get()


export default router;