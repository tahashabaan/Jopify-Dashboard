import {Router} from 'express'

import{ signUp, signIn } from '../controller/authController';

const router = Router();

router.post('/signup', signUp)
router.get('/signin', signIn)



export default router;
