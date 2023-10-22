import {Router} from 'express'

import{ signUp, signIn } from '../controller/authController';

const router = Router();

router.post('/signUp', signUp)
router.get('/signIn', signIn)



export default router;
