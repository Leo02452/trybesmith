import { Request, Response } from 'express';
import UsersService from '../services/users.service';

export default class UsersController {
  constructor(private usersService = new UsersService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const token = await this.usersService.create(user);

    res.status(201).json({ token });
  };
}
