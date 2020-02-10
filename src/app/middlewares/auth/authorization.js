import * as Yup from 'yup';
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
