import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: 'jefferson',
        sobrenome: 'santos',
        email: 'jeff@gamil.com',
        idade: 112,
        peso: 300,
        altura: 2.5,
      });
      res.json(novoAluno);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new HomeController();
