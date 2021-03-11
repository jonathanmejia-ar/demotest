import { Router } from 'express';
import * as authCtrl from '../controllers/auth.controllers';

const router = Router();

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);
router.get('/profile', authCtrl.profile);


export default router;