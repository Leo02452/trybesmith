import Joi from 'joi';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import jwtService from './jwt.service';

const authService = {
  validateBody: async (unknown: unknown) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  login: async (username: string, password: string): Promise<string> => {
    const userModel = new UserModel(connection);

    const user = await userModel.getByName(username);

    if (!user || user.password !== password) {
      const error = new Error('Username or password invalid');
      error.name = 'UnauthorizedError';
      throw error;
    }

    const { id, ...userWithoutId } = user;
    const token = jwtService.createToken(userWithoutId);
    return token;
  },
};

export default authService;