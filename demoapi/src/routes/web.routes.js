import { Router } from 'express';
import * as webCtrl from '../controllers/web.controllers';

const router = Router();

router.post('/', webCtrl.createWeb);
router.get('/', webCtrl.getWebs);
router.get('/:id', webCtrl.getWeb);
router.get('/byname/:pagename', webCtrl.getWebByName);

export default router;