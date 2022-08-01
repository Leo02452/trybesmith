import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';
import UsersService from '../services/users.service';

export default class OrdersController {
  public usersService;

  constructor(private ordersService = new OrdersService()) {
    this.usersService = new UsersService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const order = await this.ordersService.getAll();

    res.status(200).json(order);
  };

  public create = async (req: Request, res: Response) => {
    const { productsIds } = req.body;
    const { user } = res.locals;

    this.ordersService.validateBody(req.body);

    const { id } = await this.usersService.getByName(user.username);

    productsIds.map((productId: number) => this.ordersService.create(id, productId));

    res.status(201).json({ userId: id, productsIds });
  };
}
