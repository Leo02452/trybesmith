import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productsService.create(product);

    res.status(201).json(productCreated);
  };

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productsService.getAll();

    res.status(200).json(products);
  };
}
