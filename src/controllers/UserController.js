import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
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
      const { id } = req.params;
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(id)) {
        return res.status(400).json({
          errors: ['Id inválido.'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(id)) {
        return res.status(400).json({
          errors: ['Id inválido.'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }

      const newUser = await user.update(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(id)) {
        return res.status(400).json({
          errors: ['Id inválido.'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy();
      return res.json({ msg: 'Usuário deletado.', user });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
