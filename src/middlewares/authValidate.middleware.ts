import { Request, Response, NextFunction } from 'express';
import authService from '../services/auth.service';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers;
 
  const userData = authService.validateToken(header.authorization);
 
  res.locals.user = userData;

  next();
};

export default validateToken;