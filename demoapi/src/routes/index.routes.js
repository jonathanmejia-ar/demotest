import { Router } from 'express';
import authRoutes from './auth.routes';
import webRoutes from './web.routes';

const router = Router();

router.use('/', authRoutes);
router.use('/webs', webRoutes);

export default router;