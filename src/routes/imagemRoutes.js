import { Router } from 'express';
import loguinRequired from '../middlewares/loguinRequired';

import imagemController from '../controllers/ImagemController';

const router = new Router();

router.post('/', loguinRequired, imagemController.store);

export default router;
