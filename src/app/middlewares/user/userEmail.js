import User from '../../models/User';

export default async (req, res, next) => {
  const { email } = req.body;

  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    return res.status(400).json({ error: 'E-mail already registered!' });
  }

  return next();
};
