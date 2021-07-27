import Aluno from '../models/Aluno';
import Imagem from '../models/Imagem';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Imagem, 'id', 'DESC']],
      include: {
        model: Imagem,
        attributes: ['url', 'filename'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        error: e.errors.map((err) => err.message),
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
      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Imagem, 'id', 'DESC']],
        include: {
          model: Imagem,
          attributes: ['url', 'filename'],
        },
      });
      if (!aluno) {
        return res.status(404).json({
          errors: ['Aluno inexistente.'],
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(404).json({
        error: e.errors.map((err) => err.message),
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

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({
          errors: ['Aluno inexistente.'],
        });
      }
      await aluno.destroy(aluno);
      return res.json({ msg: 'Aluno deletado.' });
    } catch (e) {
      return res.status(400).json({
        error: e.errors.map((err) => err.message),
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

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({
          errors: ['Aluno inexistente.'],
        });
      }
      const newAluno = await aluno.update(req.body);
      return res.json({ msg: 'Aluno atualizado.', newAluno });
    } catch (e) {
      return res.status(400).json({
        error: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
