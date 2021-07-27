import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multerConfig';
import fotoController from '../controllers/FotoController';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('imagem'), fotoController.store);

export default router;
