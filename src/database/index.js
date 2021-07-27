import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Imagem from '../models/Imagem';

const models = [Aluno, User, Imagem];

const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
