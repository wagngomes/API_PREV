'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Solicitacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      empresa: {
        type: Sequelize.STRING
      },
      codigo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      origem: {
        type: Sequelize.STRING
      },
      destino: {
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      fornecedor: {
        type: Sequelize.STRING
      },
      obs: {
        type: Sequelize.STRING
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id'}
      },
      destino_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Centros', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Solicitacoes');
  }
};