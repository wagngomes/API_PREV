'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('registros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      fornecedor: {
        type: Sequelize.STRING
      },
      planejador: {
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      destino: {
        type: Sequelize.STRING
      },
      solicitante_nome: {
        type: Sequelize.STRING
      },
      solicitante_email: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      obs: {
        type: Sequelize.STRING
      },
      dias_em_aberto: {
        type: Sequelize.FLOAT
      },
      data_fechamento: {
        type: Sequelize.DATEONLY
      },
      email_enviado: {
        type: Sequelize.BOOLEAN
      },
      solicitante_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id'}
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
    await queryInterface.dropTable('registros');
  }
};