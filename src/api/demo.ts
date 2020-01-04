import { Router, Request, Response } from 'express';
import Logger from '../loaders/logger';

const route = Router();

export default (app: Router) => {
  app.use('/demo', route);

  route.post('/me', (req: Request, res: Response) => {
    Logger.info('req from ip %s', req.ip);
    Logger.info('req body %s', req.body);
    return res.json({
      yo: 'bro'
    }).status(200);
  });
};
