import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientsController from './app/controllers/RecipientsController';

import { userValidateBody, userValidateEmail } from './app/middlewares/user';
import {
  recipientValidateBody,
  recipientExistsValidate,
} from './app/middlewares/recipient/recipient';

import {
  sessionValidateBody,
  sessionValidateUser,
  sessionValidatePassword,
  sessionAuthorization,
} from './app/middlewares/auth';

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
routes.post('/recipients', sessionAuthorization, RecipientsController.store);
routes.put(
  '/recipients',
  recipientValidateBody,
  recipientExistsValidate,
  sessionAuthorization,
  RecipientsController.update
);

export default routes;
