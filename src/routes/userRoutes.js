import { Router } from 'express';
import userController from '../controllers/UserController';
import loguinRequired from '../middlewares/loguinRequired';

const router = new Router();

// nao deve existir
// router.get('/:id', userController.show);
// router.get('/', userController.index);
//

router.post('/', userController.store);
router.put('/', loguinRequired, userController.update);
router.delete('/', loguinRequired, userController.delete);

export default router;

/*
index -> listar usuarios GET
create/store -> criar novo usuario POST
delete -> apagar usuario DELETE
show -> mostrar usuario GET
update -> atualizar usuario PATCH PUT
*/
