import express, { Express, Request, Response } from 'express';
import * as http from 'http';
import next, { NextApiHandler } from 'next';

const port: number = parseInt(process.env.PORT || '3030', 10);
const dev: boolean = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async() => {
  const app: Express = express();
  const server: http.Server = http.createServer(app);

  app.get('/api', (req: Request, res: Response) => {
    res.json({ message: 'Hello from server!' });
  });

  app.all('*', (req: any, res: any) => {
    return nextHandler(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
