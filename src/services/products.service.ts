import Joi from 'joi';
import connection from '../models/connection';
import ProductModel from '../models/product.model';
import ProductInterface from '../interfaces/product.interface';
import { runSchema } from './utils';

export default class ProductsService {
  public model: ProductModel;

  public runSchema;

  constructor() {
    this.model = new ProductModel(connection);
    this.runSchema = runSchema;
  }

  public validateBody(unknown: unknown) {
    this.runSchema(Joi.object({
      name: Joi.string().required().min(3),
      amount: Joi.string().required().min(3),
    }))(unknown);
  }

  public create(product: ProductInterface): Promise<ProductInterface> {
    return this.model.create(product);
  }

  public async getAll(): Promise<ProductInterface[]> {
    const products = await this.model.getAll();
    return products;
  }

  public update(orderId: number, productId: number): void {
    this.model.update(orderId, productId);
  }
}
