import Joi from 'joi';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import UserInterface from '../interfaces/user.interface';
import jwtService from './jwt.service';
import { runSchema } from './utils';

export default class UsersService {
  public model: UserModel;

  public runSchema;

  constructor() {
    this.model = new UserModel(connection);
    this.runSchema = runSchema;
  }

  public validateBody(unknown: unknown) {
    this.runSchema(Joi.object({
      username: Joi.string().required().min(3),
      classe: Joi.string().required().min(3),
      level: Joi.number().required().min(1),
      password: Joi.string().required().min(8),
    }))(unknown);
  }

  public async create(user: UserInterface): Promise<string> {
    const token = jwtService.createToken(user);

    await this.model.create(user);
    return token;
  }
}
