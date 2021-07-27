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
        // eslint-disable-next-line camelcase
        if (!aluno_id) {
          return res.status(400).json({
            errors: ['Id inválido'],
          });
        }
        // eslint-disable-next-line no-restricted-globals
        if (isNaN(aluno_id)) {
          return res.status(400).json({
            errors: ['Id inválido.'],
          });
        }
        const img = await Imagem.create({ originalname, filename, aluno_id });
        return res.json(img);
      } catch (e) {
        return res.status(400).json({
          error: e.errors.map((err) => err.message),
        });
      }
    });
  }
}

export default new FotoController();
