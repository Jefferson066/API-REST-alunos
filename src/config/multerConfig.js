import multer from 'multer';
import { resolve, extname } from 'path';

const rand = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${rand()}${extname(file.originalname)}`);
    },
  }),
};
