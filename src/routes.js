import { Router } from 'express';
import UserController from './app/controllers/UserController';

import userBodyMiddleware from './app/middlewares/user/userBody';

const routes = new Router();

routes.post('/users', userBodyMiddleware, UserController.store);

export default routes;
