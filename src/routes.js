import { Router } from 'express';
import UserController from './app/controllers/UserController';

import userBodyMiddleware from './app/middlewares/user/userBody';
import userEmailMiddleware from './app/middlewares/user/userEmail';

const routes = new Router();

routes.post('/users', userBodyMiddleware, userEmailMiddleware, UserController.store);

export default routes;
