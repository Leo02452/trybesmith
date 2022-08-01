import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import UserInterface from '../interfaces/user.interface';
import { CustomError } from './utils';

dotenv.config();

const JWT_SECRET = 'claudio';

const jwtService = {
  createToken: (data: UserInterface) => {
    const token = jwt.sign(data, JWT_SECRET);
    return token;
  },

  validateToken: (token: string) => {
    try {
      const result = jwt.verify(token, JWT_SECRET);
      return result;
    } catch (e) {
      throw new CustomError('Invalid token', 'UnauthorizedError');
    }
  },
};

export default jwtService;