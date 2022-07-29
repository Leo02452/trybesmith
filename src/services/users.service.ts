import connection from '../models/connection';
import UserModel from '../models/user.model';
import UserInterface from '../interfaces/user.interface';
import jwtService from './jwt.service';

export default class UsersService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: UserInterface): Promise<string> {
    const token = jwtService.createToken(user);

    await this.model.create(user);
    return token;
  }
}
