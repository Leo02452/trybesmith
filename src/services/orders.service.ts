import Joi from 'joi';
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import OrderInterface from '../interfaces/order.interface';
import { runSchema } from './utils';

export default class OrdersService {
  public model: OrderModel;

  public runSchema;

  constructor() {
    this.model = new OrderModel(connection);
    this.runSchema = runSchema;
  }

  public validateBody(unknown: unknown) {
    this.runSchema(Joi.object({
      productsIds: Joi.array().items(Joi.number().required()).required()
        .messages({ 'array.includesRequiredUnknowns': '"productsIds" must include only numbers' }),
    }))(unknown);
  }

  public async getAll(): Promise<OrderInterface[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}
