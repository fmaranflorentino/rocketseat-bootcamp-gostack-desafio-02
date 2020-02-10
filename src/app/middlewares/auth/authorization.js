import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../../config/auth';

import User from '../../models/User';

export const sessionValidateBody = async (req, res, next) => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ error: 'Body schema is wrong!' });
  }

  return next();
};

export const sessionValidateUser = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }

  return next();
};

export const sessionValidatePassword = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!(await user.checkPassword(password))) {
    return res.status(401).json({ error: 'Password does not match!' });
  }

  return next();
};

export const sessionAuthorization = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'missing token' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
