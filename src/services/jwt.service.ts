import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import UserInterface from '../interfaces/user.interface';

dotenv.config();

const JWT_SECRET = 'claudio';

const jwtService = {
  createToken: (data: UserInterface) => {
    const token = jwt.sign(data, JWT_SECRET);
    return token;
  },
};

export default jwtService;