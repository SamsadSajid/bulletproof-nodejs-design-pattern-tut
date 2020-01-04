import { Router, Request, Response } from 'express';
const route = Router();

export default (app: Router) => {
  app.use('/demo', route);

  route.get('/me', (req: Request, res: Response) => {
    console.log(`req is ${req}`)
    return res.json({
      yo: 'bro'
    }).status(200);
  });
};
