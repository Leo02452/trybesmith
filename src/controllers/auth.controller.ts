import { Request, Response } from 'express';
import authService from '../services/auth.service';

export default class AuthController {
  public login = async (req: Request, res: Response) => {
    const loginBody = req.body;
    const { username, password } = loginBody;
    await authService.validateBody(loginBody);

    const token = await authService.login(username, password);

    res.status(200).json({ token });
  };
}
