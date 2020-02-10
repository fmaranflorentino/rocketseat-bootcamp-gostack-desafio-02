import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import {
  userValidateBody,
  userValidateEmail,
} from './app/middlewares/user/user';

import {
  sessionValidateBody,
  sessionValidateUser,
  sessionValidatePassword,
} from './app/middlewares/auth/authorization';

const routes = new Router();

routes.post(
  '/users',
  userValidateBody,
  userValidateEmail,
  UserController.store
);
routes.post(
  '/sessions',
  sessionValidateBody,
  sessionValidateUser,
  sessionValidatePassword,
  SessionController.store
);

export default routes;
