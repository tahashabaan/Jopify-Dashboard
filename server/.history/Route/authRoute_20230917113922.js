import {Router} from 'express'

import{ signUp, signIn } from '../controller/authController';

const router = Router();

router.post('/signup', signUp)
router.get('/sign', signIn)



export default router;
