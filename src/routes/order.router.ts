import { Router } from 'express';

import OrdersController from '../controllers/orders.controller';
import validateToken from '../middlewares/authValidate.middleware';

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.get('/orders', (req, res) => ordersController.getAll(req, res));
ordersRouter.use(validateToken);
ordersRouter.post('/orders', ordersController.create);

export default ordersRouter;