import { Router } from 'express';

import UsersController from '../controllers/users.controller';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/users', (req, res) => usersController.create(req, res));

export default usersRouter;