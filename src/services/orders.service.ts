import Joi from 'joi';
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import OrderInterface from '../interfaces/order.interface';
import ProductsService from './products.service';
import { runSchema } from './utils';

export default class OrdersService {
  public model: OrderModel;

  public productsService: ProductsService;

  public runSchema;

  constructor() {
    this.model = new OrderModel(connection);
    this.productsService = new ProductsService();
    this.runSchema = runSchema;
  }

  public validateBody(unknown: unknown) {
    this.runSchema(Joi.object({
      productsIds: Joi.array().items(Joi.number().required()).required()
        .messages({ 'array.includesRequiredUnknowns': '"productsIds" must include only numbers' }),
    }))(unknown);
  }

  public async create(userId: number | undefined, productId: number): Promise<void> {
    const orderId = await this.model.create(userId);

    this.productsService.update(orderId, productId);
  }

  public async getAll(): Promise<OrderInterface[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}
