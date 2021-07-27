import multer from 'multer';
import Imagem from '../models/Imagem';

import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('imagem');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        // eslint-disable-next-line camelcase
        const { aluno_id } = req.body;
        const img = await Imagem.create({ originalname, filename, aluno_id });
        return res.json(img);
      } catch (e) {
        console.log(e);
        return e;
      }
    });
  }
}

export default new FotoController();
