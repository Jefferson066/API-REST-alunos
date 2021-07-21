import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoAluno = await User.create(req.body);
      res.json(novoAluno);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
