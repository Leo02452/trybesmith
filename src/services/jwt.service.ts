import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import UserInterface from '../interfaces/user.interface';

dotenv.config();

const jwtService = {
  createToken: (data: UserInterface) => {
    const token = jwt.sign(data, 'minhaSenhaSecreta');
    return token;
  },
};

export default jwtService;