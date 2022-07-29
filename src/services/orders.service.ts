import connection from '../models/connection';
import OrderModel from '../models/order.model';
import OrderInterface from '../interfaces/order.interface';

export default class OrdersService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<OrderInterface[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}
