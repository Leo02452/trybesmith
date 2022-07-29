import { Router } from 'express';

import OrdersController from '../controllers/orders.controller';

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.get('/orders', (req, res) => ordersController.getAll(req, res));

export default ordersRouter;