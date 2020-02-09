import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import userBodyMiddleware from './app/middlewares/user/userBody';
import userEmailMiddleware from './app/middlewares/user/userEmail';

const routes = new Router();

routes.post(
  '/users',
  userBodyMiddleware,
  userEmailMiddleware,
  UserController.store
);
routes.post('/sessions', SessionController.store);

export default routes;
