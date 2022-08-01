import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError':
      return res.status(400).json({ message });
    case 'UnauthorizedError':
      return res.status(401).json({ message });
    case 'UnprocessableEntityError':
      return res.status(422).json({ message });
    default:
      return res.sendStatus(500);
  }
};

export default errorMiddleware;