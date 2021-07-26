import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      if (users.length === 0) {
        return res.status(404).json({
          errors: [' Não existe usuários cadastrados.'],
        });
      }
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      // const { id } = req.params.id;
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(req.params.id)) {
        return res.status(400).json({
          errors: ['Id inválido.'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }

      const newUser = await user.update(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy();
      return res.json({ msg: 'Usuário deletado.' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
