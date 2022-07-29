import { Router } from 'express';

import ProductsController from '../controllers/products.controller';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/products', (req, res) => productsController.create(req, res));

export default productsRouter;