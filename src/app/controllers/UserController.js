import User from '../models/User';

class UserController {
  async store(req, res) {
    console.log(req.body);
    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
