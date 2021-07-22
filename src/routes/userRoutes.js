import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
index -> listar usuarios GET
create/store -> criar novo usuario POST
delete -> apagar usuario DELETE
show -> mostrar usuario GET
update -> atualizar usuario PATCH PUT
*/
