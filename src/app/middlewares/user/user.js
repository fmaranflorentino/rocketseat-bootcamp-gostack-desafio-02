import * as Yup from 'yup';
import User from '../../models/User';

export const userValidateBody = async (req, res, next) => {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .required()
      .min(6),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ error: 'Body schema is wrong' });
  }

  return next();
};

export const userValidateEmail = async (req, res, next) => {
  const { email } = req.body;

  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    return res.status(400).json({ error: 'E-mail already registered!' });
  }

  return next();
};
