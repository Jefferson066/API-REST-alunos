module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('alunos', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  down: async () => {},
};

// npx sequelize migration:create --name=mudar-email-aluno-unique
// npx sequelize db:migrate
